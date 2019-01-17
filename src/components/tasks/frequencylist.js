import React from 'react'
import Task from './task'
import {fetchFreqlist} from '../../redux/actions'


export default  ( {corpus, dispatch} ) => {

    return (

        <Task 
            name={'Frequency list'} 
            action={ () => dispatch(fetchFreqlist(corpus))}
        >

        Frequency lists are... Well, you know what they are.

        </Task>
    )

}
