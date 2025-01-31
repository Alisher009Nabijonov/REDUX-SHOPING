import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "./cartSlice";
import { Link } from "react-router-dom";

function Checkout() {
  const cartitems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Calculate total cost
  const totalCost = cartitems.reduce((total, item) => total + parseInt(item.cost || 0), 0);

  return (
    <div>
      <div className="cart_headere">
        <Link to="/">
          <h2>Code</h2>
        </Link>
        <Link to="/checkout">
          <h4>
            Cards <small>{cartitems.length}</small>
          </h4>
        </Link>
      </div>
      {cartitems.map((item) => {
        return (
          <div className="ch" key={item.id}>
            <div className="card_checkout">
              <img src={item.image} alt="" />
              <div>
                <h4>{item.title}</h4>
                <h4>${item.cost}.00</h4>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => dispatch(removefromCart({ id: item.id }))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {cartitems.length > 0 && (
        <div className="total-cost mt-4 text-start container">
          <h4>Total Cost: ${totalCost}.00</h4>
        </div>
      )}
    </div>
  );
}

export default Checkout;
