import React from 'react';
import ReactDOM from 'react-dom';
import FrequencyListRow from './FrequencyListRow.jsx';

/**
 *
 * An element for representing data such as frequency lists in 
 * table-like format
 *
 */
export default function ResultTable ({data, type}) {

    let rows = <tr></tr>;
    let headers = <th></th>;

    switch (type){
        case "freqlist": {
            rows = data.map((row, idx) => FrequencyListRow({data: row, idx: idx}))
            break;
        }
    }

    //Implement headers with sorting capabilities
    if(data.length){
        headers = Object.keys(data[0]).map((rowname) => (
                <td key={`header_${rowname}`} OnClick={()=>console.log("clicked a header")}>
                {rowname}
                </td>))
        rows = data.map((row, idx) => <tr key={idx}>{Object.keys(row).map((col)=> <td key={col}>{row[col]}</td>)}</tr>)
    }


    return (

        <div>
            <table>
                <thead>
        
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        </div>

    )
}

