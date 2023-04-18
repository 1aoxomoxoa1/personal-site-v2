import { useRef, useState, useEffect } from "react";

function useWithinPhoneMenuStatus() {
    const [isWithinPhoneMenu, setIsWithinPhoneMenu] = useState(false);
    const smallMenuButtonRef = useRef(null)

    useEffect(() => {
      const menuButton = smallMenuButtonRef.current; 
      
      //this function is called when the menu button is pressed
      function handleMenuButtonClick(){
        setIsWithinPhoneMenu(!isWithinPhoneMenu);
      }

      //add an event listener to the small menu button that performs the above function
      menuButton.addEventListener('click', handleMenuButtonClick);

      return () => {
        menuButton.removeEventListener('click', handleMenuButtonClick)
      }

    }, [isWithinPhoneMenu])


  return [isWithinPhoneMenu, smallMenuButtonRef, setIsWithinPhoneMenu];
}

export default useWithinPhoneMenuStatus;