import React, { useState } from 'react';
import '../MenuTop/MenuTop.scss';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import SearchMovie from '../SearchMovie';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="menu-top">
      <Navbar light expand="md">
        <NavbarBrand href="/">Movie<span>Finder</span></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <SearchMovie/>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Example;