import React, {Component} from 'react';
import BEM from 'helpers/bem';
import {FormGroup, ControlLabel, FormControl, Col, Button, Form, Row, Panel} from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import links from '../../configs/links';
import {Link} from 'react-router-dom';
import './Register.scss';

const bem = new BEM('register');

export default class Register extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>Registration</PageHeader>
        <section className={bem.elem('form')}>
          <Form horizontal>
            <Row>
              <Col md={6} mdOffset={3}>
                <Panel>
                  <FormGroup controlId='email'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Email
                    </Col>
                    <Col sm={10}>
                      <FormControl type='email'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='password'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Password
                    </Col>
                    <Col sm={10}>
                      <FormControl type='password'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='password'>
                    <Col componentClass={ControlLabel} sm={2}>
                      Confirm Password
                    </Col>
                    <Col sm={10}>
                      <FormControl type='password'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button type="submit">
                        Sign Up
                      </Button>
                      &nbsp;or <Link to={links.login()}>Login</Link>
                    </Col>
                  </FormGroup>
                </Panel>
              </Col>
            </Row>
          </Form>
        </section>
      </div>
    );
  }
}