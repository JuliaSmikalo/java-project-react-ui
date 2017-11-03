import React, {Component} from 'react';
import BEM from 'helpers/bem';
import './LeftSidebar.scss';
import Message from '../Message/Message';

const bem = new BEM('left-sidebar');

export default class Content extends Component {
  render() {
    return (
      <section className={bem.mix('col-md-9')}>
        <Message/>
      </section>
    );
  }
}