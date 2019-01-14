import React from  'react';
import general_styles from './../general_styles.scss';

export default function (props) {

        const { visibility_class } = props;

        console.log("ddmenu: " + visibility_class)

        return (
            <div className={general_styles[visibility_class]}>
                {props.children}
            </div>
        );
}

