import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TrainingWordActions from '../actions/TrainingWordActions'
import WordTranslationTrainer from '../components/WordTranslationTrainer'


function mapStateToProps(state) {
    return {
        words: state.trainingWords
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TrainingWordActions, dispatch)
    }
}

let subComponents = {
    word_translation: connect(mapStateToProps, mapDispatchToProps)(WordTranslationTrainer),
    translation_word: connect(mapStateToProps, mapDispatchToProps)(WordTranslationTrainer),
    time_training: connect(mapStateToProps, mapDispatchToProps)(WordTranslationTrainer)

}

export default subComponents
