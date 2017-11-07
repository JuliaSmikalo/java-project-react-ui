import React, {Component} from 'react';
import BEM from 'helpers/bem';
import RightSidebar from '../RightSidebar/RightSidebar'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import {FormGroup, ControlLabel, FormControl, Col, Button, Form, Row, Panel} from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import './QuestionPage.scss';

const bem = new BEM('question-page');

export default class QuestionPage extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>
          Screen not rotating back to portrait after leaving AVFullScreenViewController
        </PageHeader>
        <Row>
          <Col md={9}>
            <LeftSidebar/>
          </Col>
          <Col md={3}>
            <RightSidebar/>
          </Col>
        </Row>
      </div>
    );
  }
}