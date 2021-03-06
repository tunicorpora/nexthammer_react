import React, {Component} from  'react';
import Freqlist from './tasks/frequencylist';
import Ngrams from './tasks/ngrams';
import Concordance from './tasks/concordance';

export default class ActionMenu extends Component {


    render(){
    
        return (
            <div>

                <h3> Taskmenu </h3>

                This is where the user specifies, which
                task to launch: frequency lists, ngrams, concordances.
                The available actions may vary depending on the corpus

                <Freqlist {...this.props} />
                <Ngrams {...this.props} />
                <Concordance {...this.props} />

            
            </div>
        )
    }

}
