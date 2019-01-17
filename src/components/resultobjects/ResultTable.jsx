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
    sort(){
    
    }


    render(){

        const { data, type } = this.props;

        console.log(data);
        let rows = <tr></tr>;

        switch (type){
            case "freqlist": {
                    rows = data.map((row, idx) => FrequencyListRow({data: row, idx: idx}))
                break;
            }
        }
    
        return (

            <div>
                <table>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </div>

        )
    }



}

