import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

import Header from "./header";

const Layout = ({ children, title, showHeader, description }) => {
  return (
    <StyledLayout>
      {showHeader && <Header title={title} description={description} />}
      <StyledMain>
        <Container>{children}</Container>
      </StyledMain>
    </StyledLayout>
  );
};

Layout.defaultProps = {
  showHeader: true,
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  showHeader: PropTypes.bool,
};

const StyledLayout = styled.section`
  background-color: #f8f9fa;
`;
const StyledMain = styled.main`
  min-height: 80vh;
`;

export default Layout;
