import {useState, useEffect} from 'react';
import '../../css/portfolio.css'
import PortfolioObj from './PortfolioObj';

function PortfolioTimeline({portfolio, activeIdx, setActiveIdx}){


    return( 
        <div> 
            <div className='clickable-dots'> 
            {portfolio.map((element, idx) => 
                <div className='marker' key={`marker-${idx}`}> 
                    <h3 className='header-portfolio'> {element.title} </h3>
                    {idx === activeIdx
                    ? <div className='dot dot-active' id={`idx-${idx}`}> </div>
                    : <div className='dot dot-inactive' onClick={() => setActiveIdx(idx)} id={`idx-${idx}`}> </div>
                    }
                </div>
            )
            }
            </div>
            <div className='portfolio-content'>
                {portfolio.map( (portfolioObj, idx) =>  
                    <PortfolioObj 
                        portfolioObj={portfolioObj} 
                        hidden={activeIdx === portfolioObj.idx ? false : true}> 
                    </PortfolioObj>
                )
                }
            </div>
        </div>
    )
}

export default PortfolioTimeline;