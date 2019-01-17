import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ResultTable from './ResultTable.jsx';


/**
 *
 * A general element for representing data
 *
 */
export default class ResultObject extends Component{

    /**
     *
     * sort the table...
     *
     */
    sort(){
    
    }

    constructor(props){
        super(props);
    }



    render(){

        const { data, type } = this.props;

        let obj = <div> No results</div>;

        switch(type){
            case "freqlist":{
                obj = <ResultTable data={data} type={type} />
                break;
            }
        }

    
        return (

            <article className="resultobject">
                {obj}
            </article>

        )
    }



}

