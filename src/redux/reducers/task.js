import {
    FREQUENCYLIST_REQUEST,
    FREQUENCYLIST_SUCCESS,
    FREQUENCYLIST_ERROR,
    NGRAM_REQUEST,
    NGRAM_SUCCESS,
    NGRAM_ERROR,
    CONCORDANCE_REQUEST,
    CONCORDANCE_SUCCESS,
    CONCORDANCE_ERROR,
    SORT_TABLE
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
            newtask.resultobjects[res_id] = {data: task.result, type: "freqlist"};
            return newtask;
        }
        case FREQUENCYLIST_ERROR: {
            console.log("request error")
            return { ...state, ...task }
            break;
        }
        case NGRAM_REQUEST: {
            let newtask = Object.assign({}, state);
            newtask.status = "running";
            return newtask
        }
        case NGRAM_SUCCESS: {
            let newtask = Object.assign({}, state);
            const res_id = cuid();
            newtask.status = "ready";
            newtask.current_result_id = res_id;
            newtask.resultobjects[res_id] = {data: task.result, type: "ngramlist"};
            return newtask;
        }
        case NGRAM_ERROR: {
            console.log("request error")
            return { ...state, ...task }
            break;
        }

        case CONCORDANCE_REQUEST: {
            let newtask = Object.assign({}, state);
            newtask.status = "running";
            return newtask
        }
        case CONCORDANCE_SUCCESS: {
            let newtask = Object.assign({}, state);
            const res_id = cuid();
            newtask.status = "ready";
            newtask.current_result_id = res_id;
            newtask.resultobjects[res_id] = {data: task.result, type: "ngramlist"};
            return newtask;
        }
        case CONCORDANCE_ERROR: {
            console.log("request error")
            return { ...state, ...task }
            break;
        }


        case SORT_TABLE:{
            let newtask = Object.assign({}, state);
            newtask.resultobjects[task.id].data = task.data;
            return newtask;
            break;
        }
        default:
            return state
    }

    return state;

}
