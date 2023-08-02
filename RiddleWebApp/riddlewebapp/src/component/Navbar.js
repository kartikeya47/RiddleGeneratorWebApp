import React from 'react';
import styled from "styled-components";

const NavbarContainer = styled.nav`
  padding: 20px;
  margin: 0;
  box-shadow: 0px 2px 4px #1c1e22;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2%;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 8px;
  font-size: 16px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink target='_blank' href="https://in.linkedin.com/in/kartikeya-rawat-5a38181b3">Developer's Profile (Kartikeya Rawat)</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default Navbar