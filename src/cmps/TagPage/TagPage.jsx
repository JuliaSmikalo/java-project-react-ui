import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import {Col, Row, Label} from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import ShortQuestion from '../ShortQuestion/ShortQuestion';
import api from '../../configs/api';
import fetcher from '../../helpers/fetch';
import './TagPage.scss';

const bem = new BEM('tag-page');

export default class QuestionPage extends Component {
  state = {}

  componentDidMount() {
    this.fetchTag(this.props.match.params.name);
  }

  componentWillReceiveProps(newProps) {
    this.fetchTag(newProps.match.params.name);
  }

  fetchTag(tagName) {
    fetcher(api.tag(tagName))
      .then(tag => this.setState({tag: tag}))
      .catch(error => console.log('error', error));
  }

  render() {
    const {tag = {}} = this.state,
      {name, questions = []} = tag;

    return (
      <div className={bem}>
        <PageHeader>
          Questions with tag <Label>{name || this.props.match.params.name}</Label>
        </PageHeader>
        <Row>
          <Col md={12}>
            {questions.map((question, index) =>
              <ShortQuestion {...question} key={index}/>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}