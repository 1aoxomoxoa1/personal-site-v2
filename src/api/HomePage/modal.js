//** When the animation ends, allow the user to click again
//  * 
//  */
export function onAnimationEnd(setClickable, setMenuIconClass){
    console.log('is firing')
    setClickable(true);
    setMenuIconClass('menu-icon-normal')
}