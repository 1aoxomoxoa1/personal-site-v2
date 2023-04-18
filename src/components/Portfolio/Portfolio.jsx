import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import '../../css/general.css'
import '../../css/portfolio.css'
import { useLocation } from 'react-router-dom';
import { checkNavigationHistory } from '../../api/utilities';
import { loadPortfolio } from '../../api/Portfolio/portfolio';
import PortfolioObj from './PortfolioObj';
import PortfolioTimeline from './PortfolioTimeline';

function Portfolio({smallMenuButtonRef, menuRef, isWithinPhoneMenu}){ 

    const location = useLocation();

    //if isIndex (meaning user refreshes, or comes straight to this url (NOT USING MENU))
    const [isIndex, setIsIndex] = useState(checkNavigationHistory(location));
    const [portfolio, setPortfolio] = useState([])

    //keep track of which dot is clicked on
    const [activeIdx, setActiveIdx] = useState(0);


    useEffect(() => {
        loadPortfolio(setPortfolio);
    }, [])

    console.log(portfolio);

    return( 
       <div className='my-body'> 
            <Navbar index={isIndex} smallMenuButtonRef={smallMenuButtonRef} menuRef={menuRef} isWithinPhoneMenu={isWithinPhoneMenu}> </Navbar>
            <main className='portfolio main-sec'>
                <PortfolioTimeline
                    portfolio={portfolio}
                    activeIdx={activeIdx}
                    setActiveIdx={setActiveIdx}
                > 
                </PortfolioTimeline>
            </main>
           


       </div>
    )
}

export default Portfolio;