import React from "react";
import styled from "@emotion/styled";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const { Text, Title, Body } = Card;

const Issue = ({ title, text }) => {
  return (
    <StyledIssue>
      <Body>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Body>
    </StyledIssue>
  );
};

Issue.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const StyledIssue = styled(Card)`
  @media (min-width: 560px) {
    flex-basis: 32.5%;
  }
`;

export default Issue;
