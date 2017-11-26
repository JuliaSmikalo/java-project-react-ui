import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import Welcome from '../Welcome/Welcome'
import PageHeader from '../PageHeader/PageHeader';
import ShortQuestion from '../ShortQuestion/ShortQuestion';
import {Col, Row} from 'react-bootstrap';
import './HomePage.scss';

const bem = new BEM('home-page');

export default class HomePage extends Component {
  render() {
    return (
      <div className={bem}>
        <Row>
          <Col md={12}>
            <Welcome/>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <PageHeader>Last questions</PageHeader>
            <ShortQuestion/>
            <ShortQuestion/>
            <ShortQuestion/>
          </Col>
        </Row>
      </div>
    );
  }
}