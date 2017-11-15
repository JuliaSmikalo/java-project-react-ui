import React, {Component} from 'react';
import BEM from 'helpers/bem';
import './Content.scss';

const bem = new BEM('content');

export default class Content extends Component {
  render() {
    return (
        <main className={bem.mix('container')}>
          {this.props.children}
        </main>
    );
  }
}