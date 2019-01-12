import { FREQUENCYLIST_REQUEST } from './../actiontypes'
import { fetchFreqlist } from './../actions'

export default function taskReducer(state = {}, action) {

    const { type, ...task} = action;

    switch(type) {
        case FREQUENCYLIST_REQUEST: {
            return { ...state, ...task }
        }
        default:
            return state
    }

    return state;

}
