import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import './QuestionsList.scss';
import PageHeader from '../PageHeader/PageHeader';
import ShortQuestion from '../ShortQuestion/ShortQuestion';


const bem = new BEM('questions-list');

export default class QuestionsList extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>All Questions</PageHeader>
        <ShortQuestion/>
        <ShortQuestion/>
        <ShortQuestion/>
        <ShortQuestion/>
        <ShortQuestion/>
        <ShortQuestion/>
        <ShortQuestion/>
        <ShortQuestion/>
      </div>
    );
  }
}