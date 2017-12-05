import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import PageHeader from '../PageHeader/PageHeader';
import Author from '../Author/Author';
import './UsersList.scss';


const bem = new BEM('users-list'),
staticData = [
  {id: 1, answers: 34, questions: 2, firstName: "Renata", lastName: "Celestyn", email: 'example@email.com'},
  {id: 1, answers: 4, questions: 21, firstName: "Albin", lastName: "Karlmann", email: 'example@email.com'},
  {id: 1, answers: 21, questions: 0, firstName: "Vjera", lastName: "Talfryn", email: 'example@email.com'},
  {id: 1, answers: 0, questions: 2, firstName: "Nikifor", lastName: "Columban", email: 'example@email.com'},
  {id: 1, answers: 1, questions: 2, firstName: "Caratacus", lastName: "Ámbar", email: 'example@email.com'},
  {id: 1, answers: 1, questions: 0, firstName: "Topias", lastName: "Giulio", email: 'example@email.com'},
  {id: 1, answers: 0, questions: 2, firstName: "Jeltsje", lastName: "Vimal", email: 'example@email.com'},
  {id: 1, answers: 0, questions: 11, firstName: "Altwidus", lastName: "Sandra", email: 'example@email.com'},
  {id: 1, answers: 34, questions: 2, firstName: "Ricardo", lastName: "Sven", email: 'example@email.com'},
  {id: 1, answers: 1, questions: 12, firstName: "Kay", lastName: "Ragnarr", email: 'example@email.com'}
];

export default class UsersList extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>All People</PageHeader>
        <div className={bem.elem('list')}>
          {staticData.map(author =>
            <div className={bem.elem('author')}>
              <Author {...author}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}