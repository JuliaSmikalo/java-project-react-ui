import React, {Component} from 'react';
import BEM from 'helpers/bem';
import RightSidebar from '../RightSidebar/RightSidebar'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import './Content.scss';

const bem = new BEM('content');

export default class Content extends Component {
  render() {
    return (
      <main className={bem.mix('container')}>
        <header className={bem.elem('header')}>
          <h3>Screen not rotating back to portrait after leaving AVFullScreenViewController</h3>
        </header>
        <div className={'row'}>
          <LeftSidebar/>
          <RightSidebar/>
        </div>
      </main>
    );
  }
}