import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {toggleMenu} from './../redux/actions';
import styles from './topbar.scss';

export default class extends Component{


    toggleMenu(menuname) {
        const visibility = this.props.menus[menuname] == "hidden" ? "visible_flex" : "hidden";
        this.props.dispatch(toggleMenu(menuname, visibility));
    }

    render() {


        return (
            <nav className={styles.topbar}>
                <div onClick={() => this.toggleMenu("corpusmenu") } className={styles.button}>Corpus</div>
                <div onClick={() => this.toggleMenu("taskmenu") } className={styles.button}>Run</div>
            </nav>
        )

    
    }

}
