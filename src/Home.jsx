import React from "react";
import Product from "./Product";
import Mouse from "./assets/download.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div className="cart">
      <div className="cart_headere">
        <Link to="/">
          {" "}
          <h2>Code</h2>
        </Link>
        <Link to="/checkout">
          <h4>
            Cards <small>{cartItems.length}</small>
          </h4>
        </Link>
      </div>
      <div className="cart_cards">
        <div className="cart_cards_right">
          <div className="cart_cards_main">
            <Product id="1" title="This is an electronic mouse" image={Mouse} cost="12" />
          </div>
          <div className="cart_cards_main">
            <Product id="2" title="This is an electronic mouse" image={Mouse} cost="12"/>
          </div>
          <div className="cart_cards_main">
            <Product id="3" title="This is an electronic mouse" image={Mouse} cost="12" />
          </div>
        </div>
        <div className="cart_cards_left">
          <div className="cart_cards_main">
            <Product id="4" title="This is an electronic mouse" image={Mouse} cost="12" />
          </div>{" "}
          <div className="cart_cards_main">
            <Product id="5" title="This is an electronic mouse" image={Mouse} cost="12" />
          </div>{" "}
          <div className="cart_cards_main">
            <Product id="6" title="This is an electronic mouse" image={Mouse} cost="12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
