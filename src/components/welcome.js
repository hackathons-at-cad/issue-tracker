import React from "react";
import { Layout } from "../components";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";
import Rectangle from "./Rectangle.svg";

const Welcome = () => {
  return (
    <Layout
      title="Welcome (Victor)"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada ullamcorper gravida neque, dapibus leo, auctor..."
    >
      <StyledWelcome>
        <img src={Rectangle} alt="fucking show up " />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          ullamcorper gravida neque, dapibus leo, auctor...
        </p>
        <Button variant="primary" type="submit">
          Create Company
        </Button>
      </StyledWelcome>
    </Layout>
  );
};

const StyledWelcome = styled.div`
  width: 600px;
  margin: 1em auto;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 3em 5em;
  text-align: center;

  div {
    width: 170px;
    height: 170px;

    margin: 0 auto;
  }
  p {
    padding: 1em 0;
  }
`;
export default Welcome;
