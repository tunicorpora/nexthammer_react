import React  from 'react'
import ReactDOM from 'react-dom';
import styles from './styles.scss'; 
import requestResultObject from '../resultobjects/requestResultObject';


export default ( task  ) => {

    const { status, current_result_id, resultobjects } = task;
    let Res = <div></div>;

    if(status == "ready"){
        Res = requestResultObject(resultobjects, current_result_id);
    }
    return (
        <div className={styles.Home}>
        {Res}
        </div>
    )

}
