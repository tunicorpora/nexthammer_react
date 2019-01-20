import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/topbar';
import TaskMenu from './components/taskmenu';
import CorpusMenu from './components/corpusmenu';
import CorpusDesktop from './components/corpusdesktop';
import TaskMonitor from './components/taskmonitor';
import DropDownMenu from './components/DropDownMenu';
import grid from './grid.scss'; 

export default class Main extends Component{


    constructor(props){
        super(props);
    }


    render() {

        const {  menus, task, dispatch  } =  this.props



        return (
            <main>
                <TopBar {...this.props} />  
                <DropDownMenu visibility_class={menus.corpusmenu}> <CorpusMenu {...this.props} /> </DropDownMenu>
                <DropDownMenu visibility_class={menus.taskmenu}> <TaskMenu {...this.props} /> </DropDownMenu>
                <TaskMonitor { ...task }  dispatch={dispatch}/>
                <CorpusDesktop  />
            </main>
        )
    }

}
