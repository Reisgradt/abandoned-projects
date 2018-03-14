import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NewWord from '../components/NewWord'
import * as NewWordActions from '../actions/NewWordActions'


function mapStateToProps(state) {
    const { current_word,
            current_translate,
            isFetchingTranslate,
            isTranslateFailed } = state

    return {
        current_word,
        current_translate,
        isFetchingTranslate,
        isTranslateFailed
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NewWordActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWord)
