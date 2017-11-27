import React, {Component} from 'react';
import links from '../../configs/links';
import {Link, withRouter} from 'react-router-dom';


class MainMenu extends Component {
  render() {
    const {location: {pathname}} = this.props;

    return (
      <ul className="nav navbar-nav">
        <li role="presentation" className={pathname.startsWith(links.allQuestions()) ? 'active' : ''}>
          <Link to={links.allQuestions()}>Questions</Link>
        </li>
        <li role="presentation" className={pathname.startsWith(links.allTags()) ? 'active' : ''}>
          <Link to={links.allTags()}>Tags</Link>
        </li>
        <li role="presentation" className={pathname.startsWith(links.allUsers()) ? 'active' : ''}>
          <Link to={links.allUsers()}>People</Link>
        </li>
      </ul>
    )
  }
}

export default withRouter(MainMenu);