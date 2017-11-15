import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import './Welcome.scss';
import links from '../../configs/links';
import {Button} from 'react-bootstrap';


const bem = new BEM('welcome');

export default class Welcome extends Component {
  render() {
    return (
      <div className={bem}>
        <div className={bem.elem('left')}>
          <div className={bem.elem('header')}>
            Welcome to our question system
          </div>
          Feel free to sign up and ask any question
        </div>
        <div className={bem.elem('right')}>
          <Button type="submit" bsStyle="success" href={links.signup()}>
            Sign Up For Free
          </Button>

        </div>
      </div>
    );
  }
}