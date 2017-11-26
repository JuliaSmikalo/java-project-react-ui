import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import links from '../../configs/links';
import {Link} from 'react-router-dom';
import './Welcome.scss';


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
          <Link to={links.signup()} className='btn btn-success'>
            Sign Up For Free
          </Link>
        </div>
      </div>
    );
  }
}