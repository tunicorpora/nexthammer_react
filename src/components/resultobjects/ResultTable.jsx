import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FrequencyListRow from './FrequencyListRow.jsx';

/**
 *
 * An element for representing data such as frequency lists in 
 * table-like format
 *
 */
export default class ResultTable extends Component{

    /**
     *
     * sort the table...
     *
     */
    sort(rowname){
        console.log(rowname)
    }


    render(){

        const { data, type } = this.props;

        console.log(data);
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
                    <td key={`header_${rowname}`} OnClick={()=>this.sort(rowname)}>
                    {rowname}
                    </td>))
            rows = data.map((row, idx) => Object.key(row).map((col)=> <td>{row[col]}</td>))
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



}

