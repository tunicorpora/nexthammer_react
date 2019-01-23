import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './result-table.scss';

export default function({fun, name}){

    return (
        <div className={styles.sortercont}>
            <FontAwesomeIcon icon={faCaretUp} onClick={() => fun(name, "asc")}/>
            <FontAwesomeIcon icon={faCaretDown} onClick={() => fun(name, "desc")} />
        </div>
    )
}

