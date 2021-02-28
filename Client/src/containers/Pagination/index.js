import React from 'react'

// CSS FILES  
import './Pagination.css'

// ICONS
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ page, setPage, minPage, maxPage }){

  return (
    <div className="pagination">
      <button className="pagination-button" onClick={() =>  
          setPage(currentPage => currentPage === minPage ? currentPage : currentPage - 1)}>
        <FontAwesomeIcon icon={faArrowLeft} className='pagination-change' />
      </button>
      <button className="pagination-button pagination-change">
        {page}
      </button>
      <button className="pagination-button" >
        <FontAwesomeIcon icon={faArrowRight} className='pagination-change' onClick={() => 
            setPage(currentPage => currentPage === maxPage ? currentPage : currentPage + 1)}/>
      </button>
    </div>
  )
}
