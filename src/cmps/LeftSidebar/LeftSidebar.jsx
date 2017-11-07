import React, {Component} from 'react';
import BEM from 'helpers/bem';
import './LeftSidebar.scss';
import Message from '../Message/Message';

const bem = new BEM('left-sidebar');

export default class LeftSidebar extends Component {
  render() {
    return (
      <Message/>
    );
  }
}