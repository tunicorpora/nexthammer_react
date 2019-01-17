import React  from 'react'
import styles from './styles.scss'; // For Sass


export default ( task  ) => {


        return (
            <div className={styles.Home}>
            {task.status}
            </div>
        )

}
