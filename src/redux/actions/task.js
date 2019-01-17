import {
    FREQUENCYLIST_REQUEST,
    FREQUENCYLIST_SUCCESS,
    FREQUENCYLIST_ERROR
    } from './../actiontypes'
import api_url from './api_url'
import {thunkCreator} from './utils.js'

/**
 *
 * A temporary fix?
 *
 */
function createCodes(codes){
    return "codes[]=" + codes.join("&codes[]=")
}


/**
 *
 * Fetches a frequency list
 *
 * @return a function with one argument
 *
 */
export function fetchFreqlist(corpus) {

    const {name, active_language, picked_codes} = corpus;
    const url = `${api_url}/corpora/${name}/${active_language}/frequencylist/?${createCodes(picked_codes)}`;

    return thunkCreator({
        types: [FREQUENCYLIST_REQUEST, FREQUENCYLIST_SUCCESS, FREQUENCYLIST_ERROR],
        promise: fetch(url).then(response => response.json())
    })

} 
