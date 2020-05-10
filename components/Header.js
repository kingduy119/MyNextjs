import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Button, Row } from 'react-bootstrap';
import Nativigation from './common/Navbar';

// CSS
import { headerContainer } from "../lib/stylesheet";

function Header({ user }) {
  return (
    <Container style={headerContainer}>
      <Nativigation />
      <Jumbotron style={{ width: "100%"}}>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </Container>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool,
    avatarUrl: PropTypes.string,
    isGithubConnected: PropTypes.bool,
  }),
};

Header.defaultProps = {
  user: null,
};

export default Header;
