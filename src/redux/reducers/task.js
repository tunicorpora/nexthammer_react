import {
    FREQUENCYLIST_REQUEST,
    FREQUENCYLIST_SUCCESS,
    FREQUENCYLIST_ERROR
    } from './../actiontypes'
import { fetchFreqlist } from './../actions'
import cuid from 'cuid'

export default function taskReducer(state = {}, action) {

    const { type, ...task} = action;


    switch(type) {
        case FREQUENCYLIST_REQUEST: {
            let newtask = Object.assign({}, state);
            newtask.status = "running";
            return newtask
        }
        case FREQUENCYLIST_SUCCESS: {
            let newtask = Object.assign({}, state);
            const res_id = cuid();
            newtask.status = "ready";
            newtask.current_result_id = res_id;
            newtask.resultobjects.push({id: res_id, data: task.result, type: "freqlist"});
            return newtask;
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
