import React, {Component} from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import BEM from 'helpers/bem';
import 'cmps/MainMenu/MainMenu.scss';

const bem = new BEM('main-menu');

export default class MainMenu extends Component {
  render() {
    return (
      <Nav activeKey={1}>
        <NavItem eventKey={1} href="/">Questions</NavItem>
        <NavItem eventKey={2} href="/">Tags</NavItem>
        <NavItem eventKey={3} href="/">People</NavItem>
      </Nav>
    )
  }
}