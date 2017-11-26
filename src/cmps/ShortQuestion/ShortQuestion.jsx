import React, {Component} from 'react';
import {Label} from 'react-bootstrap';
import links from '../../configs/links';
import {Link} from 'react-router-dom';
import BEM from '../../helpers/bem';
import './ShortQuestion.scss';

const bem = new BEM('short-question');

export default class ShortQuestion extends Component {

  render() {
    return (
      <article className={bem}>
        <div className={bem.elem('ratings')}>
          {this.renderRating('rating', -1)}
          {this.renderRating('answers', 23)}
          {this.renderRating('views', 10)}
        </div>
        <div className={bem.elem('details')}>
          <header>
            <Link to={links.question(1)} className={bem.elem('header-link')}>
              iOS 6 iAd orientation issues - iAds rotate my portrait only app to landscape and leaves it that way
            </Link>
          </header>
          <div className={bem.elem('text')}>
            Using this code to allow the media players to rotate in landscape (which is not supported by the app) while they are in
            fullscreen working fine in ios 10 but since ios 11 the screen will not rotate back after leaving fullscreen, thus not resizing
            the ui (the app will after rotation occupate only half of the screen). It seems there were some modification on avkit but i
            cannot find any ressources on this, thoughts?
          </div>
          <div className={bem.elem('tags')}>
            <Label bsStyle="info">Info</Label>&nbsp;
            <Label bsStyle="info">Heart</Label>&nbsp;
            <Label bsStyle="info">Fishing</Label>&nbsp;
          </div>
        </div>
      </article>
    )
  }

  renderRating(name, value) {
    return (
      <div className={bem.elem('rating')}>
        <div className={bem.elem('rating-value')}>{value}</div>
        <div className={bem.elem('rating-name')}>{name}</div>
      </div>
    )
  }
}