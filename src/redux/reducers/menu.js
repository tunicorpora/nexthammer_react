import { TOGGLE_MENU } from './../actiontypes'

export default function menuReducer(state = {}, action) {

    const { type, ...menu} = action;

    switch(type) {
        case TOGGLE_MENU: {
            return Object.assign(
                state,
                {
                    [ menu.menuname ]: menu.visibility
                }
            );
        }
        default:
            return state
    }

    return state;

}
