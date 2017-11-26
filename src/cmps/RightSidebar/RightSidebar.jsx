import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import RelatedItem from '../RelatedItem/RelatedItem'
import links from '../../configs/links';
import RelativeTime from 'react-relative-time'
import './RightSidebar.scss';


const bem = new BEM('right-sidebar');

export default class RightSidebar extends Component {
  render() {
    const {published, views} = this.props;

    return (
      <sidebar className={bem}>
        <p>
          asked <strong><RelativeTime value={published}/></strong>
        </p>
        <p>
          viewed <strong>{views} times</strong>
        </p>
        <br/>
        <section>
          <h4>Related</h4>
          <RelatedItem score={6} approved link={links.question(1)} title='iOS 6 iAd orientation issues - iAds rotate my portrait only app to landscape and leaves it that way'/>
          <RelatedItem score={-1} approved link={links.question(2)} title='Switching to Portrait ViewController from LandScape ViewController'/>
          <RelatedItem score={2} link={links.question(3)} title='GameCenter authentication in landscape-only app throws UIApplicationInvalidInterfaceOrientation'/>
        </section>
      </sidebar>
    );
  }
}