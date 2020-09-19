import React from "react";
import { Layout } from "../components";

import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

const { Group, Label, Control, Text } = Form;

const Login = () => {
  return (
    <Layout title="Issues (Company Name)" showHeader={false}>
      <StyledFormWrapper>
        <div className="head-text">
          <div className="box" />
          <p>Welcome Back</p>
        </div>
        <Form>
          <Group controlId="formBasicEmail">
            <Label>Email Address</Label>
            <Control type="email" placeholder="Input value" />
            <Text className="text-muted">
              We'll never share your email with anyone else.
            </Text>
          </Group>

          <Group controlId="formBasicPassword">
            <Label>Password</Label>
            <Control type="password" placeholder="Input value" />
          </Group>
          <Button variant="primary" type="submit" block>
            Log In
          </Button>
          <p className="link">
            <Link to="/register">Create an account</Link>
          </p>
        </Form>
      </StyledFormWrapper>
    </Layout>
  );
};

export const StyledFormWrapper = styled.div`
  width: 350px;
  margin: 8em auto;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 2em 1em;

  .head-text {
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    padding-bottom: 1em;
  }
  .head-text p {
    font-weight: bold;
  }
  .box {
    background: #673ab7;
    height: 30px;
    width: 30px;
    display: inline-block;
    margin-right: 10px;
  }

  p {
    text-align: center;
  }
  .link {
    padding: 20px 0;
  }
  .link a {
    color: #673ab7;
  }
`;

export default Login;
