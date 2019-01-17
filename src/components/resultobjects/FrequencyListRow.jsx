import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 * An element for representing a frequency lists in 
 *
 */
export default ( {data, idx} ) => {

    const { lemma, freq, nb } = data;

    return (

        <tr key={idx}>
            <td> {lemma} </td>
            <td> {freq} </td>
            <td> {nb} </td>
        </tr>

    )

}


