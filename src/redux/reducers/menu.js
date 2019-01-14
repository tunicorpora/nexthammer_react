import { TOGGLE_MENU } from './../actiontypes'

export default function menuReducer(state = {}, action) {

    const { type, ...menu} = action;

    switch(type) {
        case TOGGLE_MENU: {
            let newstate = Object.assign({}, state);
            newstate[menu.menuname] = menu.visibility
            return newstate
        }
        default:
            return state
    }

    return state;

}
