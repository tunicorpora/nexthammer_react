import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TopBar from './components/topbar'
import TaskMenu from './components/taskmenu'
import CorpusMenu from './components/corpusmenu'
import CorpusDesktop from './components/corpusdesktop'
import grid from './grid.scss'; // For Sass

import {createStore} from 'redux';

export default class Main extends Component{


    constructor(props){
        super(props);
        //this.state = props.store.getState(this.state)
    }

    componentDidMount() {

        //const { store } = this.props
        //this.unsubscribe = store.subscribe( () => {
        //    console.log("A change!");
        //    this.setState({ ...store.getState() })
        //})
    
    }

    componentWillUnmount ( ) {
        this.unsubscribe()
    }

    render() {

        console.log(this.props.task)

        return (
            <main>
                <TopBar />  
                <CorpusMenu {...this.props} />
                <TaskMenu {...this.props} />
                <CorpusDesktop {...this.props} />
            </main>
        )
    }

}
