import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/notify">Notify</Nav.Link>
        <Nav.Link href="/pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
