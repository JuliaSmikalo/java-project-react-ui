import React, {Component} from 'react';
import BEM from 'helpers/bem';
import './RelatedItem.scss';

const bem = new BEM('related-item');

export default class Content extends Component {
  render() {
    const {score, link, title, approved} = this.props
    return (
      <article className={bem}>
        <div className={bem.elem('score').mods(approved && 'approved')}>
          {score}
        </div>
        <header className={bem.elem('header')}>
          <a href={link}>
            {title}
          </a>
        </header>
      </article>
    );
  }
}