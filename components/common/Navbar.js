import React from 'react';

import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const navbar = {
  brand: { href: "/", text: "Home" },
  links: [
    { href: "#link", text: "Link" },
    { href: "#link", text: "Link" },
    { href: "#link", text: "Link" },
  ]
};

const CssNavigation = () => (
  <nav class="nav-hor">
    <ul class="nav-hor__list">
      <li class="nav-hor__item">
        <a class="nav-hor__link active" href="#link">Link</a>
      </li>
      <li class="nav-hor__item">
        <a class="nav-hor__link" href="#link">Link</a>
      </li>
      <li class="nav-hor__item">
        <a class="nav-hor__link" href="#link">Link</a>
      </li>
    </ul>
  </nav>
)

const VerticalNav = () => (
  <ul class="nav-vertical">
    <li class="nav__link active"><a href="#link">Link</a></li>
    <li class="nav__link"><a href="#link">Link</a></li>
    <li class="nav__link"><a href="#link">Link</a></li>
    <li class="nav__link"><a href="#link">Link</a></li>
  </ul>
)


class NavigationMenu extends React.PureComponent {
  render() {
    return (
      <Container className="container">
        <Navbar fixed="top">
          <Navbar.Brand href="/">Home</Navbar.Brand>

          {navbar.links.map(item => (
            <Nav.link href={item.href}>{item.text}</Nav.link>
          ))}

        </Navbar>
      </Container>
    );
  }
}

function OldNavigation() {
  return (
    <Navbar className="hd-theme-teal" bg="dark" variant="dark" fixed="top">
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

export { CssNavigation };
export default OldNavigation;
