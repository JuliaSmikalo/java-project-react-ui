import React, {Component} from 'react';
import {Label} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import links from '../../configs/links';
import Author from '../Author/Author';
import BEM from '../../helpers/bem';
import './Message.scss';

const bem = new BEM('message');

export default class Message extends Component {
  render() {
    const {id, rating = 0, approved, text = '', author, tags, published, isQuestion} = this.props,
      ancor = `${isQuestion ? 'question' : 'answer'}-${id}`;

    return (
      <article className={bem.mix('media')} id={isQuestion ? '' : ancor}>
        <div className={bem.elem('rating').mix('media-left')}>
          <button className={bem.elem('rating-up')}>
            up vote
          </button>
          <div className={bem.elem('rating-value')}>
            {rating}
          </div>
          <button className={bem.elem('rating-down')}>
            down vote
          </button>
          {approved && <div className={bem.elem('approved')}/>}
        </div>
        <div className={bem.elem('description').mix('media-body')}>
          <p className={bem.elem('text')}>
            {text.split('\n').map((item, key) => (
              <span key={key}>
                {item}
                <br/>
              </span>
            ))}
          </p>
          <div className={bem.elem('footer')}>
            <div className={bem.elem('left')}>
              {tags && <div className={bem.elem('tags')}>
                {tags.map((tag, index) => (
                  <span key={index}>
                    <Link to={links.tag(tag)}>
                      <Label bsStyle="info">{tag}</Label>
                    </Link>
                    &nbsp;
                </span>
                ))}
              </div>}
              <div className={bem.elem('share')}><a href={`#${ancor}`}>share link</a></div>
            </div>
            <Author {...author} published={published} isQuestion={isQuestion}/>
          </div>
        </div>

      </article>
    );
  }
}