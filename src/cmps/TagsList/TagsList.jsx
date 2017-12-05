import React, {Component} from 'react';
import api from '../../configs/api';
import fetcher from '../../helpers/fetch';
import BEM from '../../helpers/bem';
import PageHeader from '../PageHeader/PageHeader';
import links from '../../configs/links';
import {Label} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './TagsList.scss';


const bem = new BEM('tags-list');

export default class TagsList extends Component {
  state = {};

  componentDidMount() {
    this.fetchAllTags();
  }

  componentWillReceiveProps() {
    this.fetchAllTags();
  }

  fetchAllTags() {
    fetcher(api.allTags())
      .then(tags => this.setState({tags: tags}))
      .catch(error => console.log('error', error));
  }

  render() {
    const {tags = []} = this.state;

    return (
      <div className={bem}>
        <PageHeader>All Tags</PageHeader>
        <div className={bem.elem('list')}>
          {tags.map(tag =>
            <div className={bem.elem('tag')}>
              <div className={bem.elem('tag-label')}>
                <Link to={links.tag(tag.name)}>
                  <Label bsStyle="info">{tag.name}</Label>
                </Link>
              </div>
              <div className={bem.elem('tag-description')}>
                {tag.description}
              </div>
              <div className={bem.elem('tag-questions')}>
                <Link to={links.tag(tag.name)}>
                  {tag.questions} questions
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}