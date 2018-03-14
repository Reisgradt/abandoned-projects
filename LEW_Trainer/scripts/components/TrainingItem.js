import React, { Component } from 'react'

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Panel from 'react-bootstrap/lib/Panel'

export default class TrainingItem extends Component {
    render() {
        return <LinkContainer to={this.props.to}>
            <Panel header={this.props.header}>
                {this.props.children}
            </Panel>
        </LinkContainer>

    }
}
