import React, {Component} from 'react';
import BEM from 'helpers/bem';
import RightSidebar from '../RightSidebar/RightSidebar'
import Message from '../Message/Message';
import {Col, Row} from 'react-bootstrap';
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
            <Message/>
          </Col>
          <Col md={3}>
            <RightSidebar/>
          </Col>
        </Row>
      </div>
    );
  }
}