import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Experience from './Experiences/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact+Links/Contact';
import {createBrowserHistory} from 'history'


const history = createBrowserHistory();

history.listen(({location, action}) => {
    console.log('listening')
})

function AppRouter(){ 
    return( 
        <BrowserRouter history={history}>
            <Routes> 
                <Route path='/' element={<HomePage />} /> 
                <Route path='/experience' element={<Experience />} /> 
                <Route path='/portfolio' element={<Portfolio />} /> 
                <Route path='/contact' element={<Contact />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;