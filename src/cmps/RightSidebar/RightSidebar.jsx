import React, {Component} from 'react';
import BEM from 'helpers/bem';
import './RightSidebar.scss';
import RelatedItem from '../RelatedItem/RelatedItem'

const bem = new BEM('right-sidebar');

export default class Content extends Component {
  render() {
    return (
      <sidebar className={bem.mix('col-md-3')}>
        <p>
          asked <strong>today</strong>
        </p>
        <p>
          viewed <strong>9 times</strong>
        </p>
        <section>
          <h4>Related</h4>
          <RelatedItem score={6} approved link={'#'} title='iOS 6 iAd orientation issues - iAds rotate my portrait only app to landscape and leaves it that way'/>
          <RelatedItem score={-1} approved link={'#'} title='Switching to Portrait ViewController from LandScape ViewController'/>
          <RelatedItem score={2} link={'#'} title='GameCenter authentication in landscape-only app throws UIApplicationInvalidInterfaceOrientation'/>
        </section>
      </sidebar>
    );
  }
}