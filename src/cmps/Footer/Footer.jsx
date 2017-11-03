import React, {Component} from 'react';
import {Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import BEM from 'helpers/bem';
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
                <NavItem eventKey={1} href="/home">Home</NavItem>
                <NavItem eventKey={2} title="Item">Question</NavItem>
                <NavItem eventKey={3}>People</NavItem>
              </Nav>
              &copy; Copyright 2017 – Made by Julia Smikalo
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}