import React from 'react'
import {toggleMenu} from '../../redux/actions';
import Styles from './styles.scss';

/**
 *
 * The basic template for launchable tasks
 *
 */
export default ( { name, action,  dispatch, children } ) => (
    <div className={Styles.task}>
        <h4>{name}</h4>
        <div>
            {children}
        </div>
        <div>
            <button onClick={action} >Launch</button>
        </div>
    </div>
)

