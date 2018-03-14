import React, { Component } from 'react'

import Panel from 'react-bootstrap/lib/Panel'

export default class TranslateZone extends Component {
    render() {
        const { isFetching, isError, content } = this.props

        // panelStyle may by equil to undefined
        let panelStyle
        if (isFetching)
            panelStyle = "primary"
        else if (isError)
            panelStyle = "danger"

        return <Panel header="Translation"
                      bsStyle={panelStyle}>
            {content}
        </Panel>
    }
}
