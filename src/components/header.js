import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Container, Button, Image } from "react-bootstrap";

const Header = ({ title, description }) => {
  return (
    <StyledHeader>
      <Container className="container">
        <div className="header-left">
          <h1>{title}</h1>
          <p className="description">{description}</p>

          <StyledLinkContainer>
            <StyledLink to="/">Opened</StyledLink>
            <StyledLink to="/">Closed</StyledLink>
          </StyledLinkContainer>
        </div>
        <div className="header-left">
          <Button variant="primary" style={{ marginRight: ".5em" }}>
            Primary
          </Button>
          <Button variant="outline-primary">Create Company</Button>
          <Image thumbnail />
        </div>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 2.8em 0 0;
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 2.6em;
  box-shadow: 0 0 0 rgba(0, 0, 0.06);

  h1 {
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .description {
    max-width: 37em;
    margin-bottom: 1.8em;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  .header-right {
  }
  .header-left {
  }
`;

const StyledLinkContainer = styled.div``;

const StyledLink = styled(Link)`
  margin-right: 1em;
`;

export default Header;
