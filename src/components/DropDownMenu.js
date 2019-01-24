import React from  'react';
import general_styles from './../general_styles.scss';
import menustyles from './dropdownmenu.scss';

export default function (props) {

        const { visibility_class } = props;

        return (
            <div className={`${general_styles[visibility_class]} ${menustyles.dropdownmenu}`}>
                {props.children}
            </div>
        );
}

