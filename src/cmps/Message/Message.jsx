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
        </div>
        <div className={bem.elem('description').mix('media-body')}>
          <p className={bem.elem('text')}>
            Using this code to allow the media players to rotate in landscape (which is not supported by the app) while they are in
            fullscreen
            working fine in ios 10 but since ios 11 the screen will not rotate back after leaving fullscreen, thus not resizing the ui (the
            app will after rotation occupate only half of the screen). It seems there were some modification on avkit but i cannot find any
            ressources on this, thoughts?
          </p>
          <div className={bem.elem('tags')}>
            <Label bsStyle="info">Info</Label>&nbsp;
            <Label bsStyle="info">Heart</Label>&nbsp;
            <Label bsStyle="info">Fishing</Label>&nbsp;
          </div>
        </div>

      </article>
    );
  }
}