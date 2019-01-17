import {
    FREQUENCYLIST_REQUEST,
    FREQUENCYLIST_SUCCESS,
    FREQUENCYLIST_ERROR
    } from './../actiontypes'
import { fetchFreqlist } from './../actions'

export default function taskReducer(state = {}, action) {

    const { type, ...task} = action;

    console.log(action)

    switch(type) {
        case FREQUENCYLIST_REQUEST: {
            return { status: "running", result: []}
        }
        case FREQUENCYLIST_SUCCESS: {
            return { status: "idle", result: task.result}
        }
        case FREQUENCYLIST_ERROR: {
            console.log("request error")
            return { ...state, ...task }
        }
        default:
            return state
    }

    return state;

}
