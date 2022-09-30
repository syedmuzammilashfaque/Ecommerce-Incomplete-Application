import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Product from "./Product/Product";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Container } from 'react-bootstrap';
const Products = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.posts);

    return (

        !products.length ? (
            <>
                <Container className="text-center">
                    <CircularProgress />
                </Container>

            </>
        ) : (
            <main className={
                classes.content
            }>
                <div className={
                    classes.toolbar
                } />
                <Grid container justifyContent="center"
                    spacing={2}>
                    {
                        products.map((product) => (
                            <Grid key={
                                product._id
                            }
                                item
                                xs={12}
                                sm={6}
                                md={3}
                                lg={3}>
                                <Product product={product} />
                            </Grid>
                        ))}
                </Grid>
            </main>
        )
    );
};

export default Products;
