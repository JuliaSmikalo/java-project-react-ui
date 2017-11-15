import React, {Component} from 'react';
import {Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import BEM from 'helpers/bem';
import links from '../../configs/links';
import './Footer.scss';

const bem = new BEM('footer');

export default class Footer extends Component {

  render() {
    return (
      <footer className={bem}>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <Nav bsStyle="pills" activeKey={1}>
                <NavItem eventKey={1} href={links.home()}>Home</NavItem>
                <NavItem eventKey={2} href={links.home()}>Question</NavItem>
                <NavItem eventKey={3} href={links.home()}>People</NavItem>
              </Nav>
              &copy; Copyright 2017 – Made by Julia Smikalo
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}