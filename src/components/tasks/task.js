import React from 'react'
import {toggleMenu} from '../../redux/actions';
/**
 *
 * The basic template for launchable tasks
 *
 */
export default ( { name, action,  dispatch, children } ) => (
    <div className='action'>
        <h4>{name}</h4>
        <div>
            {children}
        </div>
        <div>
            <button 
                onClick={action}
            >Launch</button>
        </div>
    </div>
)

