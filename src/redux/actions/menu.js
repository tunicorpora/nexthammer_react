import { TOGGLE_MENU } from '../actiontypes';


export function toggleMenu(menuname, visibility){

    return {
        type: TOGGLE_MENU,
        menuname: menuname,
        visibility: visibility
        } 

} 
