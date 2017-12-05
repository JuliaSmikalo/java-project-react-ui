import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import BEM from '../../helpers/bem';
import Welcome from '../Welcome/Welcome'
import PageHeader from '../PageHeader/PageHeader';
import ShortQuestion from '../ShortQuestion/ShortQuestion';
import api from '../../configs/api';
import fetcher from '../../helpers/fetch';
import './HomePage.scss';

const bem = new BEM('home-page');

export default class HomePage extends Component {
  state = {};

  componentDidMount() {
    this.fetchAllQuestion();
  }

  componentWillReceiveProps() {
    this.fetchAllQuestion();
  }

  fetchAllQuestion() {
    fetcher(api.allQuestions())
      .then(questions => this.setState({questions: questions}))
      .catch(error => console.log('error', error));
  }

  render() {
    const {questions = []} = this.state;

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
            {questions.slice(0, 3).map((question, index) =>
              <ShortQuestion
                key={index}
                {...question}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}