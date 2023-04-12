import '../../css/navbar.css'
import CustomModal from './CustomModal';
import MenuIcon from '../../resources/menu.jpeg'
import BlackX from '../../resources/black-x.png'
import { useState, useRef, useEffect } from 'react';
import { handleShow, handleHide, menuDoubleClicked, animateMenuIcon } from '../../api/HomePage/navbar';
import { onAnimationEnd } from '../../api/HomePage/modal';

function Navbar({index}){

   
    //states to keep track of modalClasses
    const [modalClasses, setModalClasses] = useState(checkIndex('classes'))
    const [show, setShow] = useState(checkIndex('show'));
    const [clickable, setClickable] = useState(true);

    //state for the menuIcon
    const [menuIconClass, setMenuIconClass] = useState(checkIndex('menu'));

    //


    function checkIndex(item){
        if(item === 'show'){
            return false
        }else if(item === 'classes'){
            if(index === true){
                return ['left-modal', 'right-modal']
            }else{
                return  ['left-modal hiding-left', 'right-modal hiding-right']
            }
        }else if(item === 'menu'){
            if(index === true){
                return 'menu-icon'
            }else{
                return 'menu-icon spinning'
            }
        }
    }

    return( 
        <>
        <header> 
            <img 
                src={MenuIcon} 
                alt="menu-icon" 
                onClick={
                    clickable === false 
                    ? () => menuDoubleClicked(setMenuIconClass)
                    :
                        show === false 
                        ? () => handleShow(setShow, setClickable, setModalClasses, setMenuIconClass)
                        : () => handleHide(setShow, setClickable, setModalClasses, setMenuIconClass)
                } 
                className={menuIconClass}
            />
        </header>
     
        <CustomModal 
            show={show}
            setShow={setShow}
            setModalClasses={setModalClasses}
            modalClasses = {modalClasses}
            onAnimationEnd = {onAnimationEnd}
            setClickable = {setClickable}
            setMenuIconClass = {setMenuIconClass}
        />

        </>
    )
}

export default Navbar;