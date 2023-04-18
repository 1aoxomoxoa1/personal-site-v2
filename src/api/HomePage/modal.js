//** When the animation ends, allow the user to click again
//  * 
//  */
export function onAnimationEnd(setClickable, setMenuIconClass){
    setClickable(true);
    setMenuIconClass('menu-icon-normal')
}