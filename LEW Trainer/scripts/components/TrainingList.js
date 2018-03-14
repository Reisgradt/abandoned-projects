import React, { Component } from 'react'

import TrainingItem from './TrainingItem'



export default class TrainingList extends Component {
    render() {
        return <div className="container">
            <TrainingItem header="Word-Translation" to="/training/word-translation" key={1}>
                Test1
            </TrainingItem>
            <TrainingItem header="Translation-Word" to="/training/translation-word" key={2}>
                Test2
            </TrainingItem>
            <TrainingItem header="Exercise for a while" to="/training/time-training" key={3}>
                Test3
            </TrainingItem>
        </div>
    }
}
