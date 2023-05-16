import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Experience from './Experiences/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact+Links/Contact';



function AppRouter({smallMenuButtonRef, menuRef, isWithinPhoneMenu}){ 
    return( 
        <BrowserRouter>
            <Routes> 
                <Route path='/' element={<HomePage smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu}/>} /> 
                <Route path='/experience' element={<Experience smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu}/>} /> 
                <Route path='/portfolio' element={<Portfolio smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu}/>} /> 
                <Route path='/contact' element={<Contact smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu} />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;