import React, {Component} from 'react';
import BEM from 'helpers/bem';
import Header from 'cmps/Header/Header';
import Content from 'cmps/Content/Content';
import './App.scss';
import Footer from './cmps/Footer/Footer';

const bem = new BEM('App');

export default class App extends Component {
  render() {
    return (
      <div className={bem}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}