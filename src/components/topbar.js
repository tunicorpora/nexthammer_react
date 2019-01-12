import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {pickLanguage} from './../redux/actions';
import styles from './topbar.scss';

export default class extends Component{


    pickLang(select) {
        console.log("Moro")
        console.log(ev)
        //this.props.store.dispatch(pickLanguage(this.))
    }

    render() {

        return (
            <nav className={styles.topbar}>
                <div className={styles.button}>Corpus</div>
                <div className={styles.button}>Run</div>
            </nav>
        )

    
    }

}
