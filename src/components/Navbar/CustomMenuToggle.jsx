import {useState, useEffect} from 'react'
import '../../css/custom-menu-toggle.css'
import MenuIcon from '../../resources/menu.jpeg'
import '../../css/navbar.css'

function CustomMenuToggle({smallMenuButtonRef, menuRef, isWithinPhoneMenu}){

    const [showing, setShowing] = useState('dropdown-custom hiding');


    return( 
        <div className='custom-menu-small-screens'>
            <img 
                src={MenuIcon} 
                alt="menu-icon-custom" 
                // onClick={() => {showing === 'dropdown-custom showing' ? setShowing('dropdown-custom hiding') : setShowing('dropdown-custom showing')}} 
                className="menu-icon-small"
                ref={smallMenuButtonRef}
            />
            <div className={isWithinPhoneMenu === false ? 'dropdown-custom hiding' : 'dropdown-custom showing'} ref={menuRef}>
                <a href="/" > <h2> HOME </h2></a>
                <a href="/experience"> <h2> EXPERIENCE </h2></a>
                <a href="/portfolio"> <h2> PORTFOLIO </h2></a>
                <a href="/contact"> <h2> LINKS </h2></a>
            </div>
        </div>
    )
}


export default CustomMenuToggle;