import React from "react";
import { Layout } from "../components";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";

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
    align-item: center;
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

const Login = () => {
  return (
    <Layout title="Issues (Company Name)" showHeader={false}>
      <StyledFormWrapper>
        <div className="head-text">
          {" "}
          <div className="box"></div>
          <p>Welcome Back</p>
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Input value" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Input value" />
          </Form.Group>
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

export default Login;
