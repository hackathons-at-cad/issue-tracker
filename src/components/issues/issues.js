import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Issue from "./issue";

const Issues = ({ issues }) => {
  return (
    <StyledIssues>
      {issues.map(({ title, text }) => (
        <Issue {...{ title, text }} />
      ))}
    </StyledIssues>
  );
};

Issues.propTypes = {
  issues: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

const StyledIssues = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (min-width: 560px) {
    flex-wrap: nowrap;
  }
`;

export default Issues;
