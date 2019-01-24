import React from 'react';
import Task from './task';
import {fetchConcordance} from '../../redux/actions';


export default  ( {corpus, dispatch} ) => {

    return (

        <Task name={'Concordance'} 
            //TODO depending on the type of corpus (if parallell): list of languages...
            action={ () => dispatch(fetchConcordance(corpus))}
            dispatch={ dispatch } >
            <section>
                <div>Type of query?</div>
                <div>Simple, lemma, cql...graphical...?</div>
                {/*Conditional elements depending on type...*/}
            </section>
            <section>
                <div>Simple query:</div>
                <div><input type="text" /></div>
            </section>

        </Task>
    );

}
