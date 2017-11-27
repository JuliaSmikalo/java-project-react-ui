import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import BEM from '../../helpers/bem';
import links from '../../configs/links';
import {Link, withRouter} from 'react-router-dom';
import './Footer.scss';

const bem = new BEM('footer');

class Footer extends Component {

  render() {
    const {location: {pathname}} = this.props;


    return (
      <footer className={bem}>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <ul className="nav nav-pills">
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
              &copy; Copyright 2017 – Made by Julia Smikalo
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default withRouter(Footer);