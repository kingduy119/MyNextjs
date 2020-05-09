import React from 'react';
import PropTypes from 'prop-types';
import { Container, Jumbotron, Button, Row } from 'react-bootstrap';
import Nativigation from './common/Navbar';

function Header({ user }) {
  return (
    <Container style={{ borderColor: "red" }}>
      <Nativigation />
      <Jumbotron >
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
