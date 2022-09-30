import React from "react";
import "./UserProfile.css";
import { Row, Col, Dropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const UserDashboard = () => {
  return (
    <>
      <Container>
        <Row className="user-profile-main justify-content-center">
          <Col md={3} className="user-profile-left">
            <h5>Account</h5>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Account Links
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ border: "none" }}>
                <p className="dropDownItem">
                  <NavLink to="/userprofile">Account</NavLink>
                </p>

                <Dropdown.Divider />
                <p className="dropDownItem">
                  <NavLink to="/orderhistory">Order History</NavLink>
                </p>

                <Dropdown.Divider />
                <p className="dropDownItem">
                  <NavLink to="/cart">Shopping Cart</NavLink>
                </p>

                <Dropdown.Divider />
                <p className="dropDownItem">
                  <NavLink to="/changepassword">Change Password</NavLink>
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col md={6} className="user-profile-right">
            <h2>My Profile</h2>

            <hr />
            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <p className="text-user-section">Full Name:</p>
              </Col>
              <Col md={6}>
                <p>Syed Muzammil Ashfaque</p>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <p className="text-user-section">Email Address:</p>
              </Col>
              <Col md={6}>
                <p>syedmuzammilashfaque@gmail.com</p>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <p className="text-user-section">Mobile:</p>
              </Col>
              <Col md={6}>
                <p>03151194431</p>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <p className="text-user-section">Customer Status:</p>
              </Col>
              <Col md={6}>
                <p>Approved Customer</p>
              </Col>
            </Row>

            <h2> My Address</h2>

            <hr />

            <p>There is no address saved with your account.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserDashboard;
