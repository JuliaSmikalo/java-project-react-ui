import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import RightSidebar from '../RightSidebar/RightSidebar'
import Message from '../Message/Message';
import {Col, Row} from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import api from '../../configs/api';
import fetcher from '../../helpers/fetch';
import './QuestionPage.scss';

const bem = new BEM('question-page');

export default class QuestionPage extends Component {
  state = {}

  componentDidMount() {
    this.fetchQuestion(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.fetchQuestion(newProps.match.params.id);
  }

  fetchQuestion(questionId) {
    fetcher(api.question(questionId))
      .then(question => this.setState({question: question}))
      .catch(error => console.log('error', error));
  }

  render() {
    const {question = {}} = this.state,
      {answers = [], title, ...questionMessage} = question;

    return (
      <div className={bem} id={`question-${question.id}`}>
        <PageHeader>
          {title}
        </PageHeader>
        <Row>
          <Col md={9}>
            <Message {...questionMessage} isQuestion={true}/>
            {answers.map((answer, i) =>
              <Message {...answer} key={i}/>
            )}
          </Col>
          <Col md={3}>
            <RightSidebar views={question.views} published={question.published}/>
          </Col>
        </Row>
      </div>
    );
  }
}