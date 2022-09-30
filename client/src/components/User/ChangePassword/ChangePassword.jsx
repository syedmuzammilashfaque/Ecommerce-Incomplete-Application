import React from "react";
import "./ChangePassword.css";
import {
  Container,
  Col,
  Row,
  FormLabel,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import ChangePasswordImage from "../../../images/change-password.png";

const ChangePassword = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Image
              className="img-fluid"
              src={ChangePasswordImage}
              alt="change password"
            />
          </Col>

          <Col md={4} className="change-password-section">
            <h3>
              <i className="fa-solid fa-rectangle-list"></i>&nbsp;Change
              Password
            </h3>

            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="syedmuzammilashfaque@gmail.com"
            />

            <FormLabel>Old Password</FormLabel>
            <FormControl
              type="password"
              placeholder="enter your old Password"
            />

            <FormLabel>New Password</FormLabel>
            <FormControl
              type="password"
              placeholder="enter your new Password"
            />

            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              type="password"
              placeholder="enter your confirm Password"
            />

            <Button
              className="change-password-button"
              variant="primary"
              size="lg"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChangePassword;
