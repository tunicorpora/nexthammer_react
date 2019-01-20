import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FrequencyListRow from './FrequencyListRow.jsx';
import {sortTable} from '../../redux/actions/task';

/**
 *
 * An element for representing data such as frequency lists in 
 * table-like format
 *
 */
export default class ResultTable extends Component {


    sort(rowname){ 
        const { id, dispatch, data } = this.props;
        dispatch(sortTable(id, rowname, data));
    }


    render(){

        let rows = <tr></tr>;
        let headers = <th></th>;
        const { data, type, dispatch } = this.props;

        switch (type){
            case "freqlist": {
                rows = data.map((row, idx) => FrequencyListRow({data: row, idx: idx}))
                break;
            }
        }

        //Implement headers with sorting capabilities
        if(data.length){
            headers = Object.keys(data[0]).map((rowname) => (
                    <th key={`header_${rowname}`} onClick={() => this.sort(rowname)}>
                    {rowname}
                    </th>))
            rows = data.map((row, idx) => <tr key={idx}>{Object.keys(row).map((col)=> <td key={col}>{row[col]}</td>)}</tr>)
        }


        return (

            <div>
                <table>
                    <thead>
                        <tr>{headers}</tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </div>

        )
    }

}
