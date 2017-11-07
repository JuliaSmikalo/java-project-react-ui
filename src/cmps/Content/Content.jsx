import React, {Component} from 'react';
import BEM from 'helpers/bem';
import Login from '../Login/Login';
import QuestinPage from '../QuestionPage/QuestionPage';
import {BrowserRouter, Route} from 'react-router-dom';
import './Content.scss';

const bem = new BEM('content');

export default class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className={bem.mix('container')}>
          <Route path='/' component={QuestinPage} exact/>
          <Route path='/login' component={Login}/>
        </main>
      </BrowserRouter>
    );
  }
}