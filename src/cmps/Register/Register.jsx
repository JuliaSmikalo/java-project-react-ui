import React, {Component} from 'react';
import BEM from '../../helpers/bem';
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
                  <FormGroup controlId='name'>
                    <Col componentClass={ControlLabel} sm={4}>
                      Your Name
                    </Col>
                    <Col sm={8}>
                      <FormControl type='name'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='email'>
                    <Col componentClass={ControlLabel} sm={4}>
                      Email
                    </Col>
                    <Col sm={8}>
                      <FormControl type='email'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='password'>
                    <Col componentClass={ControlLabel} sm={4}>
                      Password
                    </Col>
                    <Col sm={8}>
                      <FormControl type='password'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId='password'>
                    <Col componentClass={ControlLabel} sm={4}>
                      Confirm Password
                    </Col>
                    <Col sm={8}>
                      <FormControl type='password'></FormControl>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={4} sm={8}>
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