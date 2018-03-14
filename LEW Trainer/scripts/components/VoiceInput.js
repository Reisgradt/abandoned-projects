import React, { Component } from 'react'

import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'


export default class VoiceInput extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleClick(e) {
        //this.props.enterWord(e.target.value)
    }

    render() {
        return <FormGroup>
            <Button bsStyle="primary" onClick={this.handleClick}>
                Speak the word <i className="glyphicon glyphicon-play" />
            </Button>
        </FormGroup>
    }
}


