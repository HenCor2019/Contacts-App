import React from "react";

// CSS FILES
import "./SocialMedia.css";

// ICONS
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMedia() {
  return (
    <ul className="social-media">
      <li className="social-media-item">
        <a href="https://facebook.com">
          <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
        </a>
      </li>
      <li className="social-media-item">
        <a href="https://twitter.com">
          <FontAwesomeIcon className="social-media-icon" icon={faTwitter} />
        </a>
      </li>
      <li className="social-media-item">
        <a href="https://instagram.com">
          <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
        </a>
      </li>
    </ul>
  );
}
