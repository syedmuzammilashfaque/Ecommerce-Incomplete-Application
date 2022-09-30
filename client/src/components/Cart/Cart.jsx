import React from "react";
import "./Cart.css";
import img from "../../images/laptop1.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="cart-section-main">
              <h1 className="shopping-cart">Shopping Cart</h1>
              <p className="total-items">
                You have <span className="total-items-count">7</span> items in
                shopping cart
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=" text-center align-items-center justify-content-center">
          <Col md={12} className="text-center align-items-center items-section">
            <Col className="product-img">
              <img className="img-fluid" src={img} alt="product" />
            </Col>

            <Col className="title">
              <h2>hp core i5 third generation</h2>
            </Col>

            <Col className="add-minus-quantity">
              <i
                className="fas fa-minus minus"
              //  onClick={() => decrement(id)}
              ></i>
              <input
                type="text"
                placeholder="2"
                //  placeholder={quantity}
                disabled
              />
              <i
                className="fas fa-plus add"
              // onClick={() => increment(id)}
              ></i>
            </Col>

            <Col className="price">
              <h3>$1200</h3>
            </Col>
            <Col className="remove-item">
              <i
                className="btn btn-danger  fas fa-trash-alt remove"
              // onClick={() => removeItem(id)}
              >
                &nbsp; Remove
              </i>
            </Col>
          </Col>

          <Col md={12} className="text-center align-items-center items-section">
            <Col className="product-img">
              <img className="img-fluid" src={img} alt="product" />
            </Col>

            <Col className="title">
              <h2>hp core i5 third generation</h2>
            </Col>

            <Col className="add-minus-quantity">
              <i
                className="fas fa-minus minus"
              //  onClick={() => decrement(id)}
              ></i>
              <input
                type="text"
                placeholder="2"
                //  placeholder={quantity}
                disabled
              />
              <i
                className="fas fa-plus add"
              // onClick={() => increment(id)}
              ></i>
            </Col>

            <Col className="price">
              <h3>$1200</h3>
            </Col>
            <Col className="remove-item">
              <i
                className="btn btn-danger  fas fa-trash-alt remove"
              // onClick={() => removeItem(id)}
              >
                &nbsp; Remove
              </i>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="cart-action-container align-items-center">
          <Col md={3}>
            <h3>Subtotal: Rs9,790.00</h3>
          </Col>
          <Col
            md={5}
            className="action-right align-items-center justify-content-center d-flex"
          >
            <Button className="btn btn-danger">Empty Cart</Button>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="/checkout">
              <Button className="btn btn-primary"> CheckOut</Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
