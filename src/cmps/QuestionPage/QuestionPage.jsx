import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import RightSidebar from '../RightSidebar/RightSidebar'
import Message from '../Message/Message';
import {Col, Row, FormGroup, FormControl, Button} from 'react-bootstrap';
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
            <div className={bem.elem('header')}>
              Answers
            </div>
            <div className={bem.elem('answers')}>
              {answers.map(answer =>
                <Message {...answer} key={answer.id}/>
              )}
              {answers.length === 0 &&
              <div className={bem.elem('no-answers')}>
                No answers yet. Be first!
              </div>
              }
            </div>
            <div className={bem.elem('header')}>
              Answer the question
            </div>
            <br/>
            <FormGroup controlId="formControlsTextarea">
              <FormControl componentClass="textarea" placeholder="Write your answer" rows={5}/>
            </FormGroup>
            <Button type="submit">
              Publish
            </Button>
          </Col>
          <Col md={3}>
            <RightSidebar views={question.views} published={question.published}/>
          </Col>
        </Row>
      </div>
    );
  }
}