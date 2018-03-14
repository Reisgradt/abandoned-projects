import React, { Component } from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'

export default class WordInput extends Component {
    constructor(props) {
        super(props)

        this.handleEnter = this.handleEnter.bind(this)
    }

    handleEnter(e) {
        if (e.keyCode === 13) {
            this.props.enterWord(e.target.value)
        }
    }

    render () {
        return <FormGroup>
            <FormControl
                type="text"
                value={this.props.value}
                placeholder="Enter word"
                onKeyUp={this.handleEnter}
            />
        </FormGroup>
    }
}
