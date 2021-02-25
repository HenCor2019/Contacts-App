import React, { useState, useEffect, Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

// CSS FILES
import "./Contacts.css";

//COMPONENTS
import Logout from "../../components/Contacts/Logout/Logout";
import Contact from "../../components/Contacts/Contact/Contact";
import CreateContact from "../../components/Contacts/CreateContact/CreateContact";

//SERVICES
import { createContact, getContacts } from "../../services/Services";

// CONTEXT
import UserContext from "../../context/UserContext";
import Pagination from "../Pagination";

const minPage = 1;

export default function Contacts() {
  const { tokenId } = useContext(UserContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    error: false,
    message: "",
    loading: false,
  });
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(minPage);
  const [maxPage, setMaxPage] = useState(minPage);
  const [changingContacts, setChangingContacts] = useState(false);

  useEffect(() => {
    async function getMyContacts(token) {
      await getContacts(token)
        .then((response) => {
          setContacts((prevContact) => [...prevContact, ...response.contacts]);
        })
        .catch((error) => console.error(error));
    }
    // getMyContacts(tokenId);
  }, []);

  useEffect(() => {
    setChangingContacts(true);

    async function getPagedOfContacts(token, page, limit) {
      await getContacts(token, page, limit)
        .then((response) => {
          setContacts([...response.contacts]);
          setChangingContacts(false);
          setMaxPage(response.pages);
        })
        .catch((error) => console.error(error));
    }

    getPagedOfContacts(tokenId, page);
  }, [page]);

  const handlerOnSubmit = async (name, number, email) => {
    await createContact(name, number, email, tokenId)
      .then((response) => {
        if (!response.error) {
          setContacts((prevContacts) => [
            ...prevContacts,
            { _id: Math.random() * 100 + 1, name, number, email },
          ]);
          setStatus({ error: false, message: "", loading: false });
          setName("");
          setNumber("");
          setEmail("");
          return;
        }

        setStatus({
          error: true,
          message: response.message.details[0].message,
          loading: false,
        });
      })
      .catch((error) => {
        setStatus({ error: true, message: error, loading: false });
        console.error(error);
      });
  };

  return (
    <Fragment>
      {!changingContacts ? (
        !tokenId ? (
          history.push("/signIn")
        ) : (
          <div className="contact-wrapper">
            <div className="logout-contacts">
              <Logout />
            </div>
            <div className="my-contacts-grid">
              {contacts.map((contact) => (
                <Contact key={contact._id} {...contact} />
              ))}
              <CreateContact
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
                email={email}
                setEmail={setEmail}
                status={status}
                setStatus={setStatus}
                handlerOnSubmit={handlerOnSubmit}
              />
            </div>
            <Pagination
              page={page}
              setPage={setPage}
              minPage={minPage}
              maxPage={maxPage}
            />
          </div>
        )
      ) : (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </Fragment>
  );
}
