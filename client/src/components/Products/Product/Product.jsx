import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { deletePost } from "../../../actions/posts";

import { NavLink } from "react-router-dom";
import useStyles from "./styles";
// import Rating from "../../ProductRating/Rating";

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      {/* <NavLink className={classes.linkButton} to={`/product/${product._id}`}> */}
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.images[0]}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>

            <Typography gutterBottom variant="h6" component="h2">
              {product.category}
            </Typography>
          </div>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {product.title}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Typography gutterBottom variant="body1" component="p">
            {/* <Rating
                // value={product.rating}
                // text={`${product.numReviews}
                //  reviews` }
           /> */}
            rating
            <br />
            <span style={{ fontWeight: "bold" }}>
              $ {product.price}
            </span>
          </Typography>
          <Button
            size="small"
            color="primary"
            onClick={() => { }}
          >
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(deletePost(product._id));
            }}

          >
            <i class="fa-solid fa-trash"></i> Delete
          </Button>



        </CardActions>
      </Card>
      {/* </NavLink> */}
    </>
  );
};

export default Product;
