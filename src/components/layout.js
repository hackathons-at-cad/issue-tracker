import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Layout = ({ children, title }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const StyledLayout = styled.section``;

export default Layout;
