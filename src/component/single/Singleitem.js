import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../category/data.json";
import Lightbox from "react-image-lightbox";
import "./single.css";
import "react-image-lightbox/style.css"; // Import the styles
import { CiMaximize1 } from "react-icons/ci";
import AddToCart from "../addtocart/AddToCart";

const SingleItemDetail = ({}) => {
  const { category, itemId } = useParams();
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const itemData = data[category]?.find(
    (item) => item.id === parseInt(itemId, 10)
  );

  if (!itemData) {
    return <div>Item not found</div>;
  }

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Calculate the total price based on the minimum price
    const totalPrice = itemData.price.min * quantity;

    // Create an object representing the item
    const newItem = {
      id: itemData.id,
      name: itemData.name,
      image: itemData.image,
      price: totalPrice,
      quantity: quantity,
    };

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCartItems, newItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // navigate("/cart");
  };

  const images = [
    itemData.image,
    "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d.jpg",
    "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b.jpg",
    "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c-246x300.jpg",
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div className="single_item_detail">
      <div className="single_sub_item_detail ">
        <div className="ok">
          {images.map((imageUrl, index) => (
            <div
              className="sub_ok"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                key={index}
                src={imageUrl}
                alt={``}
                className="thumbnail"
                onClick={() => openLightbox(0)}
              />
              {isHovered === index && (
                <div className="icon-container">
                  <CiMaximize1
                    className="dk"
                    onClick={() => openLightbox(index)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="single_sub_item_detail">
        <h2>{itemData.cat}</h2>
        <p>Price: ${itemData.price.min * quantity}</p>

        <div className="quantity-controls">
        <button onClick={() => setQuantity(Math.max(quantity - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {/* <AddToCart item={{ name: itemData.cat, image: itemData.image }} /> */}
        {/* <button onClick={handleAddToCart}>Add to Cart</button> */}
      </div>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default SingleItemDetail;
