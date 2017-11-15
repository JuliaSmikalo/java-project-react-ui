import React, {Component} from 'react';
import BEM from 'helpers/bem';
import Header from 'cmps/Header/Header';
import Content from 'cmps/Content/Content';
import './App.scss';
import Footer from 'cmps/Footer/Footer';
import Login from 'cmps/Login/Login';
import Register from 'cmps/Register/Register';
import QuestionPage from 'cmps/QuestionPage/QuestionPage';
import HomePage from 'cmps/HomePage/HomePage';
import {BrowserRouter, Route} from 'react-router-dom';


const bem = new BEM('app');

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={bem}>
          <Header/>
          <Content>
            <Route path='/' component={HomePage} exact/>
            <Route path='/question/:id' component={QuestionPage}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Register}/>
          </Content>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}