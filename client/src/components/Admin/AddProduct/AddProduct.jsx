import React, { useState } from 'react';
import {
  Form,
  Container,
  Col,
  Row,
  FormLabel,
  FormControl,
  Button,
} from 'react-bootstrap';
import './AddProduct.css';
import { Select, MenuItem } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../actions/posts';
import axios from 'axios';


// get the current id  for update post //

const Addproduct = () => {

  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const [product, setProduct] = useState({
    name: '',
    title: '',
    description: '',
    category: 'laptop',
    price: '',
    images: '',
  });

  const HandleImage = (e) => {
    const files = Array.from(e.target.files);
    files.map(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages(oldArray => [...oldArray, reader.result])
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    const postPromises = []
    for (let i = 0; i < images.length; i++) {
      let file = images[i];
      formdata.append('file', file);
      formdata.append('upload_preset', 'mashop')
      postPromises.push(axios.post(
        'https://api.cloudinary.com/v1_1/syed-muzammil-ashfaque/image/upload',
        formdata))
    }

    try {
      const results = await Promise.all(postPromises)
      let file = [];
      results.map((item) => { file.push(item.data.secure_url) }
      )

      dispatch(createPost({ ...product, images: file }));

    } catch (error) {
      console.log(error)
    }
  }
  return (

    <>
      <Container className="product-main">
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Row className="add_product_Section">
            <h3 className="text-center">Add Product</h3>

            <Col md={4}>
              <div className="product_left_container">
                <FormLabel>Product Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Please enter Product Name"
                  required={true}
                  id="name"
                  name="name"
                  autoComplete="off"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />

                <FormLabel>Product Title</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Please enter Product Title"
                  required={true}
                  id="title"
                  name="title"
                  autoComplete="off"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      title: e.target.value,
                    })
                  }
                />

                <FormLabel>Product Description</FormLabel>
                <FormControl
                  as="textarea"
                  placeholder="Please enter Product Description"
                  style={{ height: '100px' }}
                  required={true}
                  id="description"
                  name="description"
                  autoComplete="off"
                  value={product.description}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="product_right_container">
                {/* select */}
                <FormLabel>Select Product Category</FormLabel>
                <div className="select-product">
                  <Select
                    className="form-select-categories"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="category"
                    value={product.category}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        category: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="laptop">LAPTOP</MenuItem>
                    <MenuItem value="ssd">SSD</MenuItem>
                    <MenuItem value="tv">TV</MenuItem>
                    <MenuItem value="led">LED</MenuItem>
                    <MenuItem value="lcd">LCD</MenuItem>
                    <MenuItem value="hdd">HDD</MenuItem>
                    <MenuItem value="ram">RAM</MenuItem>
                    <MenuItem value="psu">PSU</MenuItem>
                    <MenuItem value="network">NETWORK</MenuItem>
                    <MenuItem value="monitor">MONITOR</MenuItem>
                  </Select>
                  <span className="custom-arrow"></span>
                </div>
                {/* select */}
                <FormLabel>Product Price</FormLabel>
                <FormControl
                  type="number"
                  placeholder="Please enter Product Price"
                  required={true}
                  id="price"
                  name="price"
                  autoComplete="off"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: e.target.value,
                    })
                  }
                />
                {/* image input  start*/}
                <Row className="align-items-center text-center justify-content-center">
                  <Col className="align-items-center text-center justify-content-center">
                    <FormLabel>Upload Images</FormLabel>
                    <div className="image-container">
                      <label
                        htmlFor="fileUpload"
                        className="custom-file-upload"
                      >
                        <i className="fa-solid fa-camera"></i>
                      </label>
                      <input
                        type="file"
                        accept="images/*"
                        multiple
                        id="fileUpload"
                        onChange={HandleImage}
                      />
                      <br />
                      <span>(jpg, jpeg or png)</span>
                      <Row className="mt-5 align-items-center text-center justify-content-center">
                        <Col className="renderImages" md={12}>
                          {images &&
                            images.map((image, index) => {
                              return (
                                <div key={image} className="text-center main-render-div-img">
                                  <Button className="product-image-remove-btn" onClick={() => setImages(images.filter((e) => e !== image))} title="remove image">
                                    <i className="fa fa-times" aria-hidden="true"></i></Button>
                                  <img className="product-preview-images" src={image} alt="product" />
                                </div>
                              )
                            })
                          }
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                {/* image input closed */}
                <Button
                  className="add_product_button"
                  variant="primary"
                  type="submit"
                  size="lg"
                >
                  Add Product
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default Addproduct;
