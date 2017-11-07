import React, {Component} from 'react';
import BEM from 'helpers/bem';
// import RightSidebar from '../RightSidebar/RightSidebar'
// import LeftSidebar from '../LeftSidebar/LeftSidebar'
import {FormGroup, ControlLabel, FormControl, Col, Button, Form, Row, Panel} from 'react-bootstrap';
import Login from '../Login/Login';
import QuestinPage from '../QuestionPage/QuestionPage';
import './Content.scss';

const bem = new BEM('content');

export default class Content extends Component {
  render() {
    return (
      <main className={bem.mix('container')}>
        <QuestinPage/>
        <Login/>
      </main>
    );
  }
}