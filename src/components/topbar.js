import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {pickLanguage} from './../redux/actions';
import styles from './topbar.scss';

export default class extends Component{


    toggleMenu(menuname) {
        console.log("Toggling " + menuname);
        const visibility = this.props.menus[menuname] == "hidden" ? "visible_flex" : "hidden";
        this.props.store.dispatch(toggleMenu(menuname, visibility));
    }

    render() {

        return (
            <nav className={styles.topbar}>
                <div onClick={() => this.toggleMenu("corpusmenu") } className={styles.button}>Corpus</div>
                <div className={styles.button}>Run</div>
            </nav>
        )

    
    }

}
