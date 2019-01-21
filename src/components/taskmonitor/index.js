import React  from 'react'
import ReactDOM from 'react-dom';
import styles from './styles.scss'; 
import requestResultObject from '../resultobjects/requestResultObject';


export default (  {status, current_result_id, resultobjects, dispatch}  ) => {

    let Res = <div></div>;

    if(status == "ready"){
        Res = requestResultObject(resultobjects, current_result_id, dispatch);
    }
    return (
        <div >
        {Res}
        </div>
    )

}
