import React, {Component} from 'react';
import Gravatar from 'gravatar-react';
import RelativeTime from 'react-relative-time'
import BEM from '../../helpers/bem';
import links from '../../configs/links';
import {Link} from 'react-router-dom';
import './Author.scss';

const bem = new BEM('author');

export default class User extends Component {
  render() {
    const {id, published, isQuestion, answers, questions, firstName, lastName, email} = this.props;

    return (
      <div className={bem}>
        <div className={bem.elem('image')}>
          <Gravatar email={email || ''} size={100} />
        </div>
        <div className={bem.elem('details')}>
          <div className={bem.elem('name')}>
            <Link to={links.userProfile(id)}>{firstName} {lastName}</Link>
          </div>
          {published && <div className={bem.elem('time')}>
            {isQuestion ? 'asked' : 'answered'}&nbsp;
            <RelativeTime value={published}/>
          </div>}
          {(answers || questions) && <div className={bem.elem('time')}>
            {answers || 0} answers,
            {' '}
            {questions || 0} questions
          </div>}
        </div>
      </div>
    )
  }
}