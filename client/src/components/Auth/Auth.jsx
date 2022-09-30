import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Auth.css";
import { Form, Container, Col, Row } from "react-bootstrap";
import Input from "./Input";
import Icon from "./Icon";
import { Typography, Button } from "@material-ui/core";
//google login //
import { GoogleLogin } from "react-google-login";
// import { useDispatch } from "react-redux";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);


  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    number: "",
  })

  // const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = (e) => {
    const { name, value } = e.target.value;
  };


  const handleSubmit = () => { };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    // const result = res?.profileObj;
    // const token = res?.tokenId;
    try {
      console.log(res);

      // dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };

  return (
    <>
      <Container className="auth-container">
        <Row className="auth-text-section text-center align-items-center">
          <Col md={4}>
            <div>
              <h5>
                {isSignup
                  ? "Create your MA Shop Account."
                  : "Welcome to MA Shop! Please login."}
              </h5>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p>
                {isSignup ? "Already member?" : "New member?"}
                &nbsp;
                <span className="navigate-button" onClick={switchMode}>
                  {isSignup ? "Login" : "Register"}
                </span>
                &nbsp;here.
              </p>
            </div>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row className="main-auth-section align-items-center jsutify-content-center">
            <Col md={4}>
              {isSignup && (
                <>
                  <Input
                    className="text-field"
                    name="firstname"
                    label="First Name"
                    value={user.firstname}
                    onChange={handleChange}
                    autoFocus
                  />

                  <Input
                    variant="contained"
                    className="text-field"
                    name="lastname"
                    label="Last Name"
                    value={user.lastname}
                    onChange={handleChange}
                    autoFocus
                  />
                </>
              )}

              <Input
                className="text-field"
                name="email"
                label="Email Address"
                value={user.email}
                onChange={handleChange}
                type="email"
                autoFocus
              />

              <Input
                className="input-value"
                name="password"
                label="Password"
                value={user.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />

              {isSignup && (
                <Input
                  className="input-value"
                  name="confirmpassword"
                  label="Confirm Password"
                  value={user.confirmpassword}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
              )}
            </Col>
            <Col md={4}>
              {isSignup && (
                <Input
                  className="input-value"
                  name="number"
                  label="Phone Number"
                  value={user.number}
                  onChange={handleChange}
                  type="number"
                  autoFocus
                />
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="auth-button"
              >
                {isSignup ? "Sign Up" : "Login"}
              </Button>
              {isSignup && (
                <Typography
                  className="text-section"
                  gutterBottom
                  variant="body1"
                  component="p"
                >
                  "By clicking “SIGN UP”, I agree to MA Shop Terms of Use and
                  Privacy Policy"
                </Typography>
              )}
              <Typography
                className="text-section"
                gutterBottom
                variant="body1"
                component="p"
              >
                {isSignup ? " Or, sign up with" : "Or, login with"}
              </Typography>
              <Button
                style={{ backgroundColor: "rgb(59, 89, 152)", color: "#fff" }}
                className="auth-facebook-button"
                fullWidth
                variant="contained"
              >
                <i className="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;Login
                with Facebook
              </Button>
              <GoogleLogin
                clientId="754172843078-20ude5hgc7cb5mu3o7hii4n0vkci537p.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    style={{
                      backgroundColor: "rgb(211, 72, 54)",
                      color: "#fff",
                    }}
                    className="auth-google-button"
                    fullWidth
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon />}
                    variant="contained"
                  >
                    Login with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Auth;
