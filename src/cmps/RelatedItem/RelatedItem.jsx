import React, {Component} from 'react';
import BEM from 'helpers/bem';
import {Link} from 'react-router-dom';
import './RelatedItem.scss';

const bem = new BEM('related-item');

export default class RelatedItem extends Component {
  render() {
    const {score, link, title, approved} = this.props;

    return (
      <article className={bem}>
        <div className={bem.elem('score').mods(approved && 'approved')}>
          {score}
        </div>
        <header className={bem.elem('header')}>
          <Link to={link}>
            {title}
          </Link>
        </header>
      </article>
    );
  }
}