import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './buttons.scss';

export default ({action, icon, text}) => {

    return (
    <div className={styles.menubutton} onClick={action}>
        <div><FontAwesomeIcon icon={icon} /></div>
        <div> {text}</div>
    </div>)

}
    
