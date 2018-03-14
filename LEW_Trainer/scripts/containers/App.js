import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* CSS */
import 'CSS/lib/bootstrap.min.css'
import 'CSS/index.css'

import Header from '../components/Header'
import NewWordContainer from '../containers/NewWordContainer'
import TrainingContainer from '../containers/TrainingContainer'
import TrainingList from '../components/TrainingList'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Switch>
                        <Route path="/training/word-translation" component={TrainingContainer.word_translation} />
                        <Route path="/training/translation-word" component={TrainingContainer.translation_word} />
                        <Route path="/training/time-training" component={TrainingContainer.time_training} />

                        <Route path="/training" component={TrainingList} />
                        <Route exact path="/" component={NewWordContainer} />
                    </Switch>

                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return state // TODO
}

export default connect(mapStateToProps)(App)
