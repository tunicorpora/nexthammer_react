import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {toggleMenu} from './../redux/actions';
import styles from './topbar.scss';
import { faHammer, faBook } from '@fortawesome/free-solid-svg-icons';
import MenuButton from './ui/menubutton.jsx';

export default class extends Component{

    toggleMenu(menuname) {
        const visibility = this.props.menus[menuname] == "hidden" ? "visible_flex" : "hidden";
        this.props.dispatch(toggleMenu(menuname, visibility));
    }

    render() {


        return (
            <nav className={styles.topbar}>
                <section className={styles.topbar}>
                    <MenuButton 
                        action={this.toggleMenu.bind(this, "corpusmenu")} 
                        icon = {faBook}
                        text = {"Corpus"}
                    />
                    <MenuButton 
                        action={() => this.toggleMenu("taskmenu") } 
                        icon = {faHammer}
                        text = {"Task"}
                    />
                </section>
                <section className={styles.logo}> 
                Nexthammer
                </section>
            </nav>
        )

    
    }

}
