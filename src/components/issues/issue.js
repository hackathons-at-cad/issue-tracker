import React from "react";
import styled from "@emotion/styled";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

import { truncate } from "../../util";
import { Link } from "react-router-dom";

const { Text, Title, Body } = Card;

const Issue = ({ title, text }) => {
  return (
    <StyledIssue>
      <StyledLink to="/issue">
        <Body>
          <Title className="title">{truncate(title, 25)}</Title>
          <Text className="text">{truncate(text, 100)}</Text>
        </Body>
      </StyledLink>
    </StyledIssue>
  );
};

Issue.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const StyledIssue = styled(Card)`
  margin-right: 0.5em;
  margin-bottom: 1em;

  .title {
    font-size: 1.5em;
    line-height: 1.35;
    font-weight: 500;
  }
  .text {
    color: #6c757d;
  }

  @media (min-width: 560px) {
    flex-basis: 32.5%;
  }
`;

const StyledLink = styled(Link)`
  .title {
    color: #373a3c;
    transition: color 0.25s;
  }
  &:hover {
    text-decoration: none;
  }
  &:hover .title {
    text-decoration: none;
    color: #000;
  }
`;

export default Issue;
