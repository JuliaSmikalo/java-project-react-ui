import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import PageHeader from '../PageHeader/PageHeader';
import {Label} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './TagsList.scss';


const bem = new BEM('tags-list'),
  staticData = [
    {
      id: 1,
      name: 'ultricies',
      description: 'Suspendisse ultrices a nisi a ultricies. Morbi dolor neque, dignissim a enim sit amet, scelerisque mattis sapien. Vivamus semper laoreet nunc vel tempus.',
      questions: 5
    },
    {
      id: 1,
      name: 'accumsan',
      description: 'Donec in magna ac nisi eleifend accumsan eu quis velit. Phasellus sit amet ex ut est condimentum bibendum. Quisque vehicula eget ex sed pharetra.',
      questions: 0
    },
    {
      id: 1,
      name: 'nec',
      description: 'Cras facilisis vehicula ipsum nec volutpat. Aliquam quis metus nibh. Aenean quis quam dui. Mauris dictum accumsan ornare. Aenean sit amet ante molestie, semper erat non, fermentum massa. Vestibulum quis lectus sollicitudin, blandit dui sit amet, dictum orci.',
      questions: 124
    },
    {
      id: 1,
      name: 'bibendum',
      description: 'Sed dui ligula, elementum eu quam imperdiet, interdum bibendum enim.',
      questions: 1
    },
    {
      id: 1,
      name: 'condimentum',
      description: 'Nam condimentum et ante venenatis commodo.',
      questions: 76
    },
    {
      id: 1,
      name: 'auctor',
      description: 'Quisque mollis, purus ac volutpat consequat, ex ipsum consequat nisl, auctor faucibus ipsum lectus ut augue. Donec eu nisl ultricies, cursus turpis non, ornare tellus.',
      questions: 124
    }
  ];

export default class TagsList extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>All Tags</PageHeader>
        <div className={bem.elem('list')}>
          {staticData.map(tag =>
            <div className={bem.elem('tag')}>
              <div className={bem.elem('tag-label')}>
                <Link to={'#'}>
                  <Label bsStyle="info">{tag.name}</Label>
                </Link>
              </div>
              <div className={bem.elem('tag-description')}>
                {tag.description}
              </div>
              <div className={bem.elem('tag-questions')}>
                <Link to={'#'}>
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