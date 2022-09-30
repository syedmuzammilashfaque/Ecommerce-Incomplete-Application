import React, { useEffect } from "react";

import "./ProductDetails.css";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
} from "react-bootstrap";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getPost, getPostBySearch } from "../../actions/posts";


import { useParams } from "react-router-dom";
// import Rating from "../ProductRating/Rating";

const Productdetails = ({ match }) => {

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const params = useParams();
  // const product = product.find((product) => product._id === params.id);

  return (
    <>
      <Container className="product-details-container">
        <Row className="justify-content-center">
          <Col className="mt-5 product-details-left-container" md={4}>
            <Image
              className="imgfluid"
              style={{ width: "100%" }}
            // src={product.image[1]}
            // alt={product.name}
            />
          </Col>
          <Col className="mt-5 product-details-center-container" md={5}>
            <ListGroup variant="flush">
              <ListGroupItem className="product-name">
                {/* {product.name} */}
                name
              </ListGroupItem>
              <ListGroupItem className="product-title">
                title
                {/* {product.title} */}
              </ListGroupItem>
              <ListGroupItem>Product Code:
                {/* {product.code} */}
                code
              </ListGroupItem>
              <ListGroupItem>
                <span>Brand:</span>
                {/* {product.brand} */}
              </ListGroupItem>
              <ListGroupItem>
                {/* {product.description} */}
                description
              </ListGroupItem>
              <ListGroupItem>
                {/* <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                /> */}
                rating
              </ListGroupItem>
              <ListGroupItem className="product-price">
                Price :
                {/* ${product.price} */}
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col
            className="mt-5 product-details-right-container text-center"
            md={3}
          >
            <ListGroupItem>
              <Row>
                <Col>Status :</Col>
                <Col>
                  {/* {product.countInStock > 0 ? "In Stock " : "Out of Stock"} */}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn btn-dark add-to-cart-btn">
                Add to cart&nbsp;&nbsp;
                <i className="fa-solid fa-cart-shopping"></i>
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Productdetails;
