import {useState, useEffect} from 'react';
import '../../css/portfolio.css'
import IconWithTooltip from '../HomePage/TooltipButton';

function PortfolioObj({portfolioObj, hidden}){


    return( 
        <div className='portfolio-item' hidden={hidden}>
            
            <div className='portfolioObj-main'> 
                
                <div className='desc-wrapper'>
                    {portfolioObj.idx === 1 
                        ?
                        <div className='img-desc-ctr'> 
                           <video controls width={"640"} height={"480"}>
                                <source src={portfolioObj.srcDesc} type="video/mp4"/>
                           </video>
                        </div>
                        :
                        <div className='img-desc-ctr'> 
                            <img src={portfolioObj.srcDesc} alt={portfolioObj.imgDescName} className='description-pic'/>
                        </div>

                    }
     
                    <div className='desc-ctr'>
                        <p> {portfolioObj.desc} </p>
                        <a href={portfolioObj.pageLink}> <h5> Project Link </h5></a>
                        {portfolioObj.gitLinks.length === 1
                            ?  <a href={portfolioObj.gitLinks[0]}> <h5> Github Link </h5></a>
                            : <>
                                <a href={portfolioObj.gitLinks[0]}> <h5> Github Link (client) </h5></a>
                                <a href={portfolioObj.gitLinks[1]}> <h5> Github Link (server) </h5></a>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='tech-used-ctr'>
                <h5> Tech Used:  </h5>
                <div className='tech-used'> 
                    {portfolioObj.techUsed.map((techObj) => 
                        <IconWithTooltip name={techObj.name.slice(0, -4)} src={techObj.src}> </IconWithTooltip>
                    )

                    }
                </div>
            </div>
        </div> 
    )
}

export default PortfolioObj