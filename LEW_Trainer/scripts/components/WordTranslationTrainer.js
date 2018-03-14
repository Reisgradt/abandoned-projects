import React, { Component } from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/FormGroup'
import Button from 'react-bootstrap/lib/FormControl'

export default class WordTranslationTrainer extends Component {
    render() {
        return <Grid>
            <Row>
                <Col xs={12} md={3}>
                    <div className="word-question">
                        {this.props.wordQuestion}
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="word-answer">
                        <FormGroup>
                            <FormControl
                                type="text"
                                placeholder="Enter word"
                                onKeyUp={}
                            />
                        </FormGroup>
                    </div>
                </Col>
            </Row>
        </Grid>
    }
}
