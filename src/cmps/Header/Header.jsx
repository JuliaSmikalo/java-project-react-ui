import React, {Component} from 'react';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup} from 'react-bootstrap';
import BEM from 'helpers/bem';
import MainMenu from 'cmps/MainMenu/MainMenu.jsx';
import './Header.scss';

const bem = new BEM('header');

export default class Header extends Component {
  render() {
    return (
      <Navbar className={bem.toString()}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" className={bem.elem('logo-link').toString()}>
              <svg className={bem.elem('logo')} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000">
                <g>
                  <path
                    d="M295.8,73.8c0,33.6-27.4,60.9-61.3,60.9c-33.8,0-61.2-27.3-61.2-60.9c0-33.6,27.5-60.9,61.2-60.9C268.4,12.9,295.8,40.2,295.8,73.8z"/>
                  <path
                    d="M295.8,581.1C69.7,581.1,10,315.6,10,175.3C10,33.2,188,33.2,255,33.2v81.3c-163.3,0-163.3,39.6-163.3,60.9c0,90.3,36.6,324.7,204.1,324.7V581.1z"/>
                  <path
                    d="M377.5,73.8c0,33.6,27.4,60.9,61.3,60.9c33.8,0,61.2-27.3,61.2-60.9c0-33.6-27.4-60.9-61.2-60.9C404.9,12.9,377.5,40.2,377.5,73.8z"/>
                  <path
                    d="M377.5,581.1V500c167.5,0,204.2-234.4,204.2-324.7c0-21.3,0-60.9-163.4-60.9V33.2c67,0,245,0,245,142.2C663.3,315.6,603.6,581.1,377.5,581.1z"/>
                  <path
                    d="M867.5,987.1c-67.6,0-122.5-54.6-122.5-121.8c0-67.2,54.9-121.8,122.5-121.8c67.6,0,122.5,54.6,122.5,121.8C990,932.5,935.1,987.1,867.5,987.1z M867.5,824.7c-22.5,0-40.8,18.3-40.8,40.6c0,22.4,18.3,40.6,40.8,40.6c22.5,0,40.8-18.3,40.8-40.6C908.3,842.9,890.1,824.7,867.5,824.7z"/>
                  <path
                    d="M745,530.4c-90.1,0-163.3,72.8-163.3,162.4v111.6c0,55.9-45.8,101.5-102.1,101.5c-56.3,0-102.1-45.6-102.1-101.5v-274h-81.7v274c0,100.8,82.5,182.7,183.8,182.7c97.9,0,177.3-76.6,182.8-172.5h1V692.8c0-44.8,36.7-81.3,81.7-81.3c45,0,81.7,36.4,81.7,81.3V774h81.6v-81.2C908.3,603.2,835.1,530.4,745,530.4z"/>
                  <path
                    d="M377.5,473h-81.7c-29.7,0-61.3,21.3-61.3,60.8c0,1.3,4.6,131.9,77.6,131.9h48.9c73.1,0,77.6-130.6,77.6-131.9C438.8,494.3,407.2,473,377.5,473z"/>
                </g>
              </svg>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <MainMenu/>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search"/>
            </FormGroup>
          </Navbar.Form>
          <Navbar.Form pullRight>
            {' '}
            <Button type="submit">Sign Up</Button>
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}