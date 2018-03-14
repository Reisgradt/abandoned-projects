import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem from 'react-bootstrap/lib/NavItem'
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'

export default class Header extends Component {
    render () {
        return <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">LEW Trainer</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to="/" exact>
                        <NavItem>New words</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/training">
                        <NavItem>Training</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/settings">
                        <NavItem>Settings</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}
