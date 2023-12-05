// CartPage.js
import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Function to handle removal of an item from the cart
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    // Update local storage with the updated cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log("Checkout clicked");
  };

  return (
    <div className="card">
      <div className="men_navigator">
        <Link to="/" className="linka">
          <h2>home</h2>
        </Link>
        <h2>|</h2>
        <h2>cart</h2>
      </div>
      <h2 className="mainer">shopping cart</h2>

      {cartItems.length === 0 ? (
        <div className="lp">
          <img
            className="fmk"
            src="https://minimalist-e-commerce.vercel.app/static/media/empty-cart.17f48bd13327a233e04a.png"
            alt=""
          />
          <p>Your cart is currently empty.</p>
          <Link className="linka" to="/shop">
            <button>continue shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="card_grid_main">
            <div className="card_sub_main">
              {cartItems.map((item) => (
                <div className="cardert" key={item.id}>
                  <div className="card_sm">
                    <div className="card_sm_divide">
                      <div className="card_img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="card_details">
                        <h2>{item.name}</h2>
                        <h3>color: white</h3>
                        <h3>size: 01/S</h3>
                      </div>
                    </div>
                    <div className="card_sm_divide">
                      <div className="dfc">
                        <p>{item.price}$</p>
                        <div className="dfc_btn">
                          <FaRegWindowClose
                            className="ds"
                            onClick={() => handleRemoveItem(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card_sub_main">
              <div className="card_second">
                <h2>order details</h2>
                <div className="card_flex">
                  <div className="card_sm_flex">
                    <h2>subtotal</h2>
                    <h3>${calculateTotalPrice()}</h3>
                  </div>
                  {/* Add other order details as needed */}
                </div>
                <div className="card_flex">
                  <div className="card_sm_flex">
                    <h2>shipping fees</h2>
                    <h3>$0</h3>
                  </div>
                  {/* Add other order details as needed */}
                </div>
                <div className="card_flex">
                  <div className="card_sm_flex">
                    <h2 className="boosa">Grand total</h2>
                    <h3>${calculateTotalPrice()}</h3>
                  </div>
                  {/* Add other order details as needed */}
                </div>
                <button className="btno">proceed payment</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
