import React, { Component } from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Panel from 'react-bootstrap/lib/Panel'

import WordInput from '../components/WordInput'
import VoiceInput from '../components/VoiceInput'
import AddWordButton from '../components/AddWordButton'
import TranslateZone from '../components/TranslateZone'

export default class NewWord extends Component {
    render() {
        const { enterWord, addWord } = this.props.actions
        const { current_translate,
                isFetchingTranslate,
                isTranslateFailed } = this.props

        const translateZoneProps = {
            content: current_translate,
            isFetching: isFetchingTranslate,
            isError: isTranslateFailed
        }

        return <Grid>
            <Row>
                <Col xs={12} md={4}>
                    <Panel header="Input zone">
                        <WordInput enterWord={enterWord} />
                        <VoiceInput />
                    </Panel>
                </Col>
                <Col xs={12} md={2}>
                    <FormGroup>
                        <AddWordButton addWord={addWord} />
                    </FormGroup>
                </Col>
                <Col xs={12} md={6}>
                    <TranslateZone {...translateZoneProps} />
                </Col>
            </Row>
        </Grid>
    }
}
