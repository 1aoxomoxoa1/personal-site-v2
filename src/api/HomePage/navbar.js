export function handleShow(setShow, setClickable, setModalClasses, setMenuIconClass){ 
    setShow(true);
    setClickable(false);
    animateMenuIcon(setMenuIconClass);
    let modalClassesActive = ['left-modal showing-left', 'right-modal showing-right'];
    setModalClasses(modalClassesActive);
}

export function handleHide(setShow, setClickable, setModalClasses, setMenuIconClass){ 
    setShow(false);
    setClickable(false);
    animateMenuIcon(setMenuIconClass);
    let modalClassesActive = ['left-modal hiding-left', 'right-modal hiding-right']
    setModalClasses(modalClassesActive);
}


export function menuDoubleClicked(setMenuIconClass){
    console.log('wait');
    setMenuIconClass('menu-icon spinning shake')
}


export function animateMenuIcon(setMenuIconClass){ 
    setMenuIconClass('menu-icon spinning')
}