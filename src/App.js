import Main from './main'
import {connect} from 'react-redux'

function mapStateToProps(state) {

    return {
        corpus: state.corpus,
        task: state.task,
        menus: state.menus
    }

}

const App = connect(mapStateToProps)(Main)

export default App
