import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import links from '../../configs/links';


export default class MainMenu extends Component {
  render() {
    return (
      <Nav activeKey={1}>
        <NavItem eventKey={1} href={links.home()}>Questions</NavItem>
        <NavItem eventKey={2} href={links.home()}>Tags</NavItem>
        <NavItem eventKey={3} href={links.home()}>People</NavItem>
      </Nav>
    )
  }
}