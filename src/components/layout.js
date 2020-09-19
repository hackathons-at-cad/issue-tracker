import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Header from "./header";

const Layout = ({ children, title, showHeader }) => {
  return (
    <StyledLayout>
      {showHeader && <Header title={title} />}
      <StyledMain>{children}</StyledMain>
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

const StyledLayout = styled.section``;
const StyledMain = styled.main``;

export default Layout;
