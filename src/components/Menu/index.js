import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../../images/web-logo.png';

const MenuBar = () => {
  return (
    <Menu stackable secondary>
      <Menu.Item>
        <Link to="/"><Image size="small" src={logo} style={{ marginRight: '1.5em' }} /></Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item><Link to="/Home">Home</Link></Menu.Item>
        <Menu.Item><Link to="/Technologies">Technologies</Link></Menu.Item>
        <Menu.Item><Link to="/Services">Services</Link></Menu.Item>
        <Menu.Item><Link to="/CaseStudies">Case studies</Link></Menu.Item>
        <Menu.Item><Link to="/QuieroColaborar">Contact Us</Link></Menu.Item>
        <Dropdown item text='Categories'>
          <Dropdown.Menu>
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Automotive</Dropdown.Item>
            <Dropdown.Item>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

export default MenuBar;