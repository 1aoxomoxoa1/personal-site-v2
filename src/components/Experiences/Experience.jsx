import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/general.css'
import { useLocation } from 'react-router-dom';
import { checkNavigationHistory } from '../../api/utilities';
import { loadImagesExperience } from '../../api/Experience/experience';
import Timeline from './Timeline';
import { loadImagesHome } from '../../api/HomePage/homepage';

function Experience({smallMenuButtonRef, menuRef, isWithinPhoneMenu, setIsWithinPhoneMenu}){ 

    const location = useLocation();
    
    //if isIndex (meaning user refreshes, or comes straight to this url (NOT USING MENU))
    const [isIndex, setIsIndex] = useState(checkNavigationHistory(location));



    const [experiences, setExperiences] = useState([]);
    const [techImages, setTechImages] = useState([]);
    const [activeIdx, setActiveIdx] = useState(0);


    useEffect(() => {
        //load our experiences information
        loadImagesExperience(setExperiences);

        //and get the tech images that we used on home page
        loadImagesHome(setTechImages);
    }, [])


    return( 
       <div className='my-body'> 
            <Navbar index={isIndex} smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu}> </Navbar>
            <main className='experiences main-sec'>
                <Timeline 
                    experiences={experiences} 
                    techImages={techImages} 
                    activeIdx={activeIdx} 
                    setActiveIdx={setActiveIdx}> 
                </Timeline>
            </main>
       </div>
    )
}

export default Experience;