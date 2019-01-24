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
    } from './../actiontypes';
import api_url from './api_url';
import {thunkCreator} from './utils.js';
import React from 'react';
import ResultObject from '../../components/resultobjects/ResultObject.jsx';
import {sortBy} from 'underscore';
import { toggleMenu } from './menu.js'

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
 * Fetches a list of ngrams
 *
 */
export function fetchNgramList(corpus) {
    const {name, active_language, picked_codes} = corpus;
    const url = `${api_url}/corpora/${name}/${active_language}/ngrams/?${createCodes(picked_codes)}`;
    return thunkCreator({
        types: [NGRAM_REQUEST, NGRAM_SUCCESS, NGRAM_ERROR],
        promise: fetch(url).then(response => response.json())
    });
}


/**
 *
 * Fetches a concordance
 *
 */
export function fetchConcordance(corpus) {
    const {name, active_language, picked_codes} = corpus;
    const query = "sopimus";
    const url = `${api_url}/corpora/${name}/concordance/simple?query=${query}&${createCodes(picked_codes)}`;
    return thunkCreator({
        types: [CONCORDANCE_REQUEST, CONCORDANCE_SUCCESS, CONCORDANCE_ERROR],
        promise: fetch(url).then(response => response.json())
    });
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

    if (direction === "desc") {
        data = data.reverse()
    }

    return {
        type: SORT_TABLE,
        id:id,
        data: data
    }

} 
