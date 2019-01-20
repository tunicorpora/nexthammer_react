import React  from 'react'
import ReactDOM from 'react-dom';
import styles from './styles.scss'; // For Sass


export default ( task  ) => {

    const { status, current_result_id, resultobjects } = task;
    if(status == "ready"){
        const current_obj = resultobjects.find((obj) => obj.id === current_result_id);
        console.log(current_obj);
    }

    if (status === "loading"){
        indicator = <div> Loading!</div>
    }

    return (
        <div className={styles.Home}>
        </div>
    )

}
