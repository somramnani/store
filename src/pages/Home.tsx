import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <h1 className="display-3">Welcome to Our Store</h1>
        <p className="lead">Find the best products at unbeatable prices</p>
        <Link to="/store">
          <Button variant="primary" size="lg">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
