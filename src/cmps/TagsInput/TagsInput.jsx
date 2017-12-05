import React, {Component} from 'react';
import {WithContext as ReactTags} from 'react-tag-input'
import BEM from '../../helpers/bem';
import './TagsInput.scss';


const bem = new BEM('tags-input');

export default class TagsInput extends Component {
  state = {tags: []}

  render() {
    return (
      <ReactTags
        {...this.props}
        handleDelete={this.handleDelete}
        handleAddition={this.handleAddition}
        handleDrag={this.handleDrag}
        classNames={{
          ...(this.props.classNames || {}),
          tag: `label label-info ${bem.elem('tag-label')}`
        }}
        tags={this.state.tags}
      />
    );
  }


  handleDelete = (i) => {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleAddition = (tag) => {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({tags: tags});
  };

  handleDrag = (tag, currPos, newPos) => {
    let tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({tags: tags});
  }
}