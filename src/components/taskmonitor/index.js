import React  from 'react'
import ReactDOM from 'react-dom';
import styles from './styles.scss'; // For Sass


export default ( task  ) => {

        const { status, result } = task;
        let indicator = null;

        if (status === "loading"){
            indicator = <div> Loading!</div>
        }

        return (
            <div className={styles.Home}>
            </div>
        )

}
