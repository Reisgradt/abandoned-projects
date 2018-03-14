import React, { Component } from 'react'

import Button from 'react-bootstrap/lib/Button'

export default class AddWordButton extends Component {
    constructor(props) {
        super(props)

        this.onBtnClick = this.onBtnClick.bind(this)
    }

    onBtnClick() {
        this.props.addWord()
    }

    render() {
        return <Button bsStyle="success" onClick={this.onBtnClick}>
            <i className="glyphicon glyphicon-plus" /> { }
            Add Word
        </Button>
    }
}
