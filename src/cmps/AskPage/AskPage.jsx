import React, {Component} from 'react';
import BEM from '../../helpers/bem';
import {Col, Row, FormGroup, FormControl, Button} from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import TagsInput from '../TagsInput/TagsInput';
import './AskPage.scss';

const bem = new BEM('ask-page');

export default class QuestionPage extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>
          {'Ask your question'}
        </PageHeader>
        <Row>
          <Col md={12}>
            <br/>
            <FormGroup controlId="formControlsTextarea">
              <FormControl componentClass="textarea" placeholder="Write your question" rows={7} autoFocus/>
            </FormGroup>
            <FormGroup >
              <TagsInput autofocus={false} classNames={{tagInputField: 'form-control'}}/>
            </FormGroup>
            <Button type="submit">
              Ask the question
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}