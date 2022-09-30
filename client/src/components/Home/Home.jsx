import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Products from "../Products/Products";
import Carousel from "../Carousel/Carousel";
import "./Home.css";

const Home = () => {

  return (
    <>
      <Carousel />
      <Container fluid className="home-page-section">
        <Products />
      </Container>
      <div className="theme-divider"></div>
    </>
  );
};

export default Home;
