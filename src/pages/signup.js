import React from "react";
import { Layout } from "../components";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { StyledFormWrapper } from "./login";

const { Group, Label, Control, Text } = Form;

const Signup = () => {
  return (
    <Layout title="Sign Up" showHeader={false}>
      <StyledFormWrapper>
        <div className="head-text">
          <div className="box"></div>
          <p>Create Account</p>
        </div>
        <Form>
          <Group controlId="formText">
            <Label>FirstName</Label>
            <Control type="text" placeholder="Input value" />
          </Group>
          <Group controlId="formText">
            <Label>Surname</Label>
            <Control type="text" placeholder="Input value" />
          </Group>
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
            Create Account
          </Button>
          <p className="link">
            <Link to="/">Log In</Link>
          </p>
        </Form>
      </StyledFormWrapper>
    </Layout>
  );
};

export default Signup;
