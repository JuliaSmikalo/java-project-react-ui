import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import PageHeader from '../PageHeader/PageHeader';
import ShortQuestion from '../ShortQuestion/ShortQuestion';
import api from '../../configs/api';
import fetcher from '../../helpers/fetch';
import './QuestionsList.scss';


const bem = new BEM('questions-list');

export default class QuestionsList extends Component {
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
        <PageHeader>All Questions</PageHeader>
        {questions.map((question, index) =>
          <ShortQuestion
            key={index}
            {...question}
          />
        )}
      </div>
    );
  }
}