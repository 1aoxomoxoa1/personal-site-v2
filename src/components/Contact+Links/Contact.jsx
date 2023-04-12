import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/general.css'
import '../../css/contact.css'
import { useLocation } from 'react-router-dom';
import { checkNavigationHistory } from '../../api/utilities';
import { loadContactImages } from '../../api/Contact+Links/contact';

function Contact(){ 

    const location = useLocation();

    //if isIndex (meaning user refreshes, or comes straight to this url (NOT USING MENU))
    const [isIndex, setIsIndex] = useState(checkNavigationHistory(location));
    const [contactImages, setContactImages] = useState([]);

    //get the contact images that we  will need

    useEffect(() => {
        loadContactImages(setContactImages)
    }, [])


    console.log(contactImages);

    return( 
       <div className='my-body'> 
            <Navbar index={isIndex}> </Navbar>
            <main className='contact main-sec'>
                <div className='contact-wrapper'> 
                    <h1> Let's <span className='name-flair'> Talk </span></h1>
                    <div className='contact-info'>
                        {contactImages.map((contactImage) => 
                            <div className='row'>
                                <div className='img-wrapper'>
                                    <img src={contactImage.src} alt={contactImage.name} /> 
                                </div>
                                <h2> {contactImage.info} </h2>
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