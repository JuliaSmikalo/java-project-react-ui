import React, {Component} from 'react';
import BEM from 'helpers/bem';
import {FormGroup, ControlLabel, FormControl, Col, Button, Form, Row, Panel} from 'react-bootstrap';
import PageHeader from '../PageHeader/PageHeader';
import './Login.scss';

const bem = new BEM('login');

export default class Login extends Component {
  render() {
    return (
      <div className={bem}>
        <PageHeader>Login to the system</PageHeader>
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
                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Button type="submit">
                        Login
                      </Button>
                      &nbsp;or <a href="#">Sign Up</a>
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