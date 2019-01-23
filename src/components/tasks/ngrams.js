import React from 'react'
import Task from './task'
import {fetchNgramList} from '../../redux/actions'


export default  ( {corpus, dispatch} ) => {

    return (

        <Task name={'N-grams'} 
            action={ () => dispatch(fetchNgramList(corpus))}
            dispatch={ dispatch } >

            <section>
                <div>Which n-grams?</div>
                <div>SLIDER</div>
            </section>
            <section>
                <div>Lemmatized?</div>
                <div><input type='checkbox' /></div>
            </section>

        </Task>
    )

}
