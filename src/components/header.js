import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

const Header = ({ title, description }) => {
  return (
    <StyledHeader>
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
      </Container>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const StyledHeader = styled.header`
  background-color: "#fff";
`;

export default Header;
