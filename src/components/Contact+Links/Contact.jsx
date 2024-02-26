import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/general.css'
import '../../css/contact.css'
import { useLocation } from 'react-router-dom';
import { checkNavigationHistory } from '../../api/utilities';
import { loadContactImages } from '../../api/Contact+Links/contact';

function Contact({smallMenuButtonRef, menuRef, isWithinPhoneMenu, setIsWithinPhoneMenu}){ 

    const location = useLocation();

    //if isIndex (meaning user refreshes, or comes straight to this url (NOT USING MENU))
    const [isIndex, setIsIndex] = useState(checkNavigationHistory(location));
    const [contactImages, setContactImages] = useState([]);

    //get the contact images that we  will need

    useEffect(() => {
        loadContactImages(setContactImages)
    }, [])


    return( 
       <div className='my-body'> 
            <Navbar index={isIndex} smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu}> </Navbar>
            <main className='contact main-sec'>
                <div className='contact-wrapper'> 
                    <h1> Let's <span className='name-flair'> Talk! </span></h1>
                    <h3>  Aaron <span className='name-flair'> Cohen </span> - Data Analyst & Full Stack Developer </h3>
                    <div className='contact-info'>
                        {contactImages.map((contactImage, index) => 
                            <div className='my-row'>
                                <div className='img-wrapper'>
                                    <img src={contactImage.src} alt={contactImage.name}/> 
                                </div>
                                <div className='text-wrapper-info'> 
                                    {index === 2 ?
                                    <a href={contactImage.info}> <span> {contactImage.info} </span> </a>
                                    : 
                                    <span> {contactImage.info} </span>
                                    }
                                </div>
                                {/* <h2> {contactImage.info} </h2> */}
                            </div>
                        )
                        }
                    </div>
                </div>
            </main>
           


       </div>
    )
}

export default Contact;