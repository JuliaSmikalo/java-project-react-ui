import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import PageHeader from '../PageHeader/PageHeader';
import Author from '../Author/Author';
import './UsersList.scss';


const bem = new BEM('users-list'),
staticData = [
  {authorUuid: 1, answers: 34, questions: 2, name: "Renata Celestyn"},
  {authorUuid: 1, answers: 4, questions: 21, name: "Albin Karlmann"},
  {authorUuid: 1, answers: 21, questions: 0, name: "Vjera Talfryn"},
  {authorUuid: 1, answers: 0, questions: 2, name: "Nikifor Columban"},
  {authorUuid: 1, answers: 1, questions: 2, name: "Caratacus Ámbar"},
  {authorUuid: 1, answers: 1, questions: 0, name: "Topias Giulio"},
  {authorUuid: 1, answers: 0, questions: 2, name: "Jeltsje Vimal"},
  {authorUuid: 1, answers: 0, questions: 11, name: "Altwidus Sandra"},
  {authorUuid: 1, answers: 34, questions: 2, name: "Ricardo Sven"},
  {authorUuid: 1, answers: 1, questions: 12, name: "Kay Ragnarr"}
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