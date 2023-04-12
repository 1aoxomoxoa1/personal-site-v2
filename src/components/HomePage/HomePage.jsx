import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import IconWithTooltip from './TooltipButton';
import '../../css/general.css'
import '../../css/homepage.css'
import ProfilePic from '../../resources/test-profile.jpg';
import { useLocation } from 'react-router-dom';
import { checkNavigationHistory } from '../../api/utilities';
import {loadImagesHome} from '../../api/HomePage/homepage';

//https://aaronmassey.pro/

function HomePage(){ 

    let location = useLocation();
    

    const [isIndex, setIsIndex] = useState(checkNavigationHistory(location));
    const [images, setImages] = useState([]);
    
    //load the images when the page loads
    useEffect(() => {
        loadImagesHome(setImages);
    }, []);


    return( 
       <div className='my-body'> 
            <Navbar index={isIndex}> </Navbar>
            <main className='home main-sec'>
                <div> 
                    <div className='name-pic-div'> 
                        <h1> Aaron <span className='name-flair'> Cohen </span> </h1>
                        <img src={ProfilePic} alt="profile-pic" className='profile-pic'/>
                    </div>
                    <h2 className='interests'> Full Stack Developer, Fitness Junky, Energy Drink Enjoyer</h2>
                    <h2> Location : Tel Aviv, Israel</h2>
                    <p> 
                        Hi, I'm Aaron. 
                        <br />
                        In 2022, I graduated from University of California, Los Angeles, receiving my B.A. in Economics with a minor in Cognitive Science. Following graduation, I enrolled as a student in an Experis Academy bootcamp sponsored by the Israeli Government, where I have been trained to work with a full stack tech stack. I am seeking opportunities into apply and strengthen my skills as an entry-level full stack developer.
                        <br />
                    </p>
                    <div className='techs'> 
                        {images.map( (image) => 
                            <IconWithTooltip name={image.name.slice(0, -4)} src={image.src}> </IconWithTooltip>
                        )
                        }
                    </div> 

                </div>
            </main>
           


       </div>
    )
}

export default HomePage;