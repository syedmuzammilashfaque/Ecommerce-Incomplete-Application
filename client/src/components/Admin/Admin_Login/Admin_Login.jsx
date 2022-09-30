import React from "react";
import "./Admin_Login.css";
import {
  Form,
  Col,
  Row,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Form>
        <Row className="main-admin justify-content-center align-items-center">
          <Col md={4} className="admin_section">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="Please enter your Email" />

            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Please enter your Pasword"
            />

            <Button className="admin_button" variant="primary" size="lg">
              Admin Login
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
