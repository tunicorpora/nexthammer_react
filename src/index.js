import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
//import appReducer from  './redux/reducers'
import {Provider} from 'react-redux'
import configureStore from './redux/store'
import DevTools from './DevTools.jsx'


const store = configureStore({
        corpus: {
            name: "pest_inter",
            available_languages: ["fi", "ru", "en", "sv", "fr"],
            available_tasks: [],
            active_language: "fi",
            picked_codes: ["mini_age_sea_1936_fi", "un_association_agriculture_1921_fi", "un_cert_able_seamen_1946_fi"]
        },
        task: {
            status: "idle",
            type: "",
            result: undefined
        },
        menus: {
            corpusmenu: "hidden",
            taskmenu: "hidden"
        },
//        desktop: {
//            items: []
//        }
    }
);

ReactDOM.render(
    <Provider store={store}> 
        <App /> 
        { (process.env.NODE_ENV !== 'production') && <DevTools />}
    </Provider>, 
    document.getElementById('root')
);

