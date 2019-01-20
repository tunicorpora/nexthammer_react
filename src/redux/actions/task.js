import {
    FREQUENCYLIST_REQUEST,
    FREQUENCYLIST_SUCCESS,
    FREQUENCYLIST_ERROR,
    SORT_TABLE
    } from './../actiontypes';
import api_url from './api_url';
import {thunkCreator} from './utils.js';
import React from 'react';
import ResultObject from '../../components/resultobjects/ResultObject.jsx';
import {sortBy} from 'underscore';

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
 */
export function fetchFreqlist(corpus) {

    const {name, active_language, picked_codes} = corpus;
    const url = `${api_url}/corpora/${name}/${active_language}/frequencylist/?${createCodes(picked_codes)}`;

    return thunkCreator({
        types: [FREQUENCYLIST_REQUEST, FREQUENCYLIST_SUCCESS, FREQUENCYLIST_ERROR],
        promise: fetch(url).then(response => response.json())
    })
}


/**
 *
 * @param id of the result object
 * @param colname the name of the column to sort by
 * @param data the actual table
 * @param direction ascending/descending
 *
 */
export function sortTable(id, rowname, data, direction){


    data = sortBy(data, rowname)
    if (direction == "desc") {
        data = data.reverse()
    }

    return {
        type: SORT_TABLE,
        id:id,
        data: data
    }

} 
