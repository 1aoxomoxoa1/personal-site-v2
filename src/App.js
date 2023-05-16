import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import useMenuHeight from './components/CustomHooks/useMenuHeight';
import useWithinPhoneMenuStatus from './components/CustomHooks/useWithinPhoneMenuStatus';


function App() {

  const [menuRef, menuHeight] = useMenuHeight();
  const [isWithinPhoneMenu, smallMenuButtonRef, setIsWithinPhoneMenu] = useWithinPhoneMenuStatus();

  function handleClickOffSmallMenu(event){
    console.log('calling handleClickOffSmallMenu')

    //if user is within the menu while using a phone or viewport < 600px 
    if(isWithinPhoneMenu){
      //if the user clicks below the height of the custom menu I created
      if(event.clientY > menuHeight){
        setIsWithinPhoneMenu(false);
      }
    }
  }

  return (
      <div onClick={(event) => handleClickOffSmallMenu(event)}>
        <AppRouter 
          menuRef={menuRef} 
          smallMenuButtonRef={smallMenuButtonRef}
          isWithinPhoneMenu={isWithinPhoneMenu}
        > 
        </AppRouter>
      </div>
  );
}

export default App;
