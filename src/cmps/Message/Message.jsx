import React, {Component} from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, Label} from 'react-bootstrap';
import BEM from 'helpers/bem';
import './Message.scss';

const bem = new BEM('message');

export default class Message extends Component {
  render() {
    return (
      <article className={bem.mix('media')}>
        <div className={bem.elem('rating').mix('media-left')}>
          <button className={bem.elem('rating-up')}>
            up vote
          </button>
          <div className={bem.elem('rating-value')}>
            7
          </div>
          <button className={bem.elem('rating-down')}>
            down vote
          </button>
          <div className={bem.elem('approved')}/>
        </div>
        <div className={bem.elem('description').mix('media-body')}>
          <p className={bem.elem('text')}>
            Using this code to allow the media players to rotate in landscape (which is not supported by the app) while they are in
            fullscreen
            working fine in ios 10 but since ios 11 the screen will not rotate back after leaving fullscreen, thus not resizing the ui (the
            app will after rotation occupate only half of the screen). It seems there were some modification on avkit but i cannot find any
            ressources on this, thoughts?
          </p>
          <div className={bem.elem('footer')}>
            <div className={bem.elem('tags')}>
              <Label bsStyle="info">Info</Label>&nbsp;
              <Label bsStyle="info">Heart</Label>&nbsp;
              <Label bsStyle="info">Fishing</Label>&nbsp;
            </div>
            <div className={bem.elem('author')}>
              <div className={bem.elem('author-image')}>
                <img src='data:image/jpg;base64,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'/>
              </div>
              <div className={bem.elem('author-details')}>
                <div className={bem.elem('author-name')}>
                  <a href="#">John Smith</a>
                </div>
                <div className={bem.elem('author-time')}>asked Oct 8, 24 12:11</div>
              </div>
            </div>
          </div>
        </div>

      </article>
    );
  }
}