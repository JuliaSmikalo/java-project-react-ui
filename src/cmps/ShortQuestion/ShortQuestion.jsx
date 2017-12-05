import React, {Component} from 'react';
import {Label} from 'react-bootstrap';
import links from '../../configs/links';
import {Link} from 'react-router-dom';
import BEM from '../../helpers/bem';
import './ShortQuestion.scss';

const bem = new BEM('short-question');

export default class ShortQuestion extends Component {

  render() {
    const {rating, answers, views, title, text, tags = []} = this.props;

    return (
      <article className={bem}>
        <div className={bem.elem('ratings')}>
          {this.renderRating('rating', rating)}
          {this.renderRating('answers', answers)}
          {this.renderRating('views', views)}
        </div>
        <div className={bem.elem('details')}>
          <header>
            <Link to={links.question(1)} className={bem.elem('header-link')}>
              {title}
            </Link>
          </header>
          <div className={bem.elem('text')}>
            {text}
          </div>
          <div className={bem.elem('tags')}>
            {tags.map((tag, index) =>
              <span key={index}>
                <Link to={links.tag(tag)}>
                  <Label bsStyle="info">{tag}</Label>
                </Link>
                &nbsp;
              </span>
            )}
          </div>
        </div>
      </article>
    )
  }

  renderRating(name, value = 0) {
    return (
      <div className={bem.elem('rating')}>
        <div className={bem.elem('rating-value')}>{value}</div>
        <div className={bem.elem('rating-name')}>{name}</div>
      </div>
    )
  }
}