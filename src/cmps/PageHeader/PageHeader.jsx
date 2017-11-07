import React, {Component} from 'react';
import BEM from 'helpers/bem';
import './PageHeader.scss';

const bem = new BEM('page-header-a');

export default class PageHeader extends Component {
  render() {
    return (
      <header className={bem}>
        <h3>{this.props.children}</h3>
      </header>
    );
  }
}