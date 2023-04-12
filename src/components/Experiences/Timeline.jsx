import {useState, useEffect, useRef} from 'react';
import '../../css/timeline.css';
import '../../css/general.css';
import { loadImagesExperience } from '../../api/Experience/experience';
import { loadImagesHome, loadTechImages } from '../../api/HomePage/homepage';
import IconWithTooltip from '../HomePage/TooltipButton';


function Timeline({experiences, techImages, activeIdx, setActiveIdx}){
    
    return (
      <div>
            <div className='clickable-dots'> 
                {experiences.map((element, idx) => 
                    <div className='marker' key={`marker-${idx}`}> 
                        <h3> {element.dates} </h3>
                        {idx === activeIdx
                        ? <div className='dot dot-active' id={`idx-${idx}`}> </div>
                        : <div className='dot dot-inactive' onClick={() => setActiveIdx(idx)} id={`idx-${idx}`}> </div>
                        }
                    </div>
                )
                }
            </div>
            <div className='experiences-content' aria-labelledby='content'> 
                {experiences.map((experience, idx) => 
                    <div className='experience' key={`experience-${idx}`} hidden={idx === activeIdx ? false : true}> 
                        <h2> {experience.title} </h2> 
                        <div className='experience-main'> 
                            <img src={experience.src} alt={experience.name} />
                            <div className='experience-info'> 
                                <p> {experience.info}</p>
                                {experience.name === 'experis.jpg' 
                                    ?  <>
                                            <p> Responsibilities: </p>
                                            <div className='techs'> 
                                            {techImages.map( (image) => 
                                                <IconWithTooltip name={image.name.slice(0, -4)} src={image.src}> </IconWithTooltip>
                                            )
                                            }
                                            </div>
                                        </>
                                    : <div className='responsibilites'> 
                                        {experience.responsibilities.length === 0
                                            ? <> </>
                                            : <p> Responsibilities: </p>
                                        }
                                        {experience.responsibilities.map((responsibility) => 
                                            <ul> 
                                                <li> {responsibility}</li>
                                            </ul>
                                        )  
                                        }
                                      </div>
                                }
                            </div>
                            
                        </div>

                    </div>
                )
                }
            </div>
      </div>
    );
};



export default Timeline;
