import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NameLogo2 from '../../resources/aaron-logo.png'
import { Link } from 'react-router-dom';
import { handleHide } from '../../api/HomePage/navbar';




function CustomModal({show, setShow, modalClasses, setModalClasses, onAnimationEnd, setClickable, setMenuIconClass}){

  const urlToIndexMap = new Map([['/', 0], ['/experience', 1], ['/portfolio', 2], ['/contact', 3]]);
  const pageLinks = ['HOME', 'EXPERIENCE', 'PORTFOLIO', 'CONTACT / LINKS'];
  const indexToUrlMap = new Map([[0, '/'], [1, '/experience'], [2, '/portfolio'], [3, '/contact']]);
  const [currentPageIdx, setCurrentPageIdx] = useState(getCurrentPageIdx())
  
  function getCurrentPageIdx(){
    let currentPath = window.location.href;
    let baseUrl = process.env.REACT_APP_SERVER;

    const regex = new RegExp(baseUrl, 'g');
    let currentPage = currentPath.replace(regex, ""); 

    return urlToIndexMap.get(currentPage);
  }

  return (
    <>
      <div 
            className={modalClasses[0]}
            onAnimationEnd={() => onAnimationEnd(setClickable, setMenuIconClass)}
      >
          <img src={NameLogo2} alt="name-logo" className='name-logo'/>
      </div>

      <div 
          className={modalClasses[1]} 
          onAnimationEnd={() => onAnimationEnd(setClickable, setMenuIconClass)}
      >
        <div className='nav-links'> 
          { pageLinks.map( (linkDest, index) => 
            index === currentPageIdx 
            ?  <h2 
                  style={{color: "#43A579"}} 
                  onClick={() => handleHide(setShow, setClickable, setModalClasses, setMenuIconClass )}> 
                  {linkDest} 
                </h2> //the page we are currently on
            :   <Link to={indexToUrlMap.get(index)} state={{fromMenu: true}} >  <h2 > {linkDest} </h2> </Link>  //active links
          )

          }
        </div> 

      </div>
    </>
  );
}

export default CustomModal;