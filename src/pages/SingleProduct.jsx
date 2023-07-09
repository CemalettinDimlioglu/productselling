import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import PRODUCTS from "../data";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const singleProduct = PRODUCTS.find(product => product.id === parseInt(productId ))
    
 

  const { id, name, price, image, details } = singleProduct;
console.log(id, useLocation);
  return (
    <main>
      <div className="pg-header">
        <div className="contanier">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
               
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price">
              <strong>{price}</strong>
            </p>
            <p>
              {details}
              {details}
              {details}
              {details}
            </p>
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(-1)}
            >
              BACK
            </button> &nbsp;
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(`/products`)}
            >
              NAVIGATE TO PRODUCT
            </button> &nbsp;
            <Link to="/products" className="btn btn-primary btn-sm">
              PRODUCTS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
