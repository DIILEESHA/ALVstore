import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../category/data.json";
import Lightbox from "react-image-lightbox";
import "./single.css";
import "react-image-lightbox/style.css";
import { CiMaximize1 } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegDotCircle } from "react-icons/fa";
import RelatedItems from "../related/RelatedItems ";
import Spinner from "../spinner/Spinner";
import useLoading from "../category/useLoading";

const SingleItemDetail = () => {
  const loading = useLoading();
  const { category, itemId } = useParams();
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
    const totalPrice = itemData.price.min * quantity;

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

    toast("Item added to cart!", { type: "success" });
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
      {loading && <Spinner />}
      {!loading && (
        <>
          

          <div className="singa">
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
                      id="opening"
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
            <div className="single_sub_item_detail az">
              <h3 className="dusa">{itemData.cat}</h3>
              <h2>{itemData.name}</h2>
              <div className="price_ranger">
                <div className="i">
                  <h5>{itemData.price.min && itemData.price.max}$</h5>
                  <h4> & Free Shipping</h4>
                </div>

                <p>{itemData.description}</p>
                <hr className="sudo" />
                <div style={{ margin: "20px 0" }} className="quantity-controls">
                  <span onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
                    -
                  </span>
                  <span>{quantity}</span>
                  <span onClick={() => setQuantity(quantity + 1)}>+</span>
                  <span onClick={handleAddToCart}>Add to Cart</span>
                </div>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
              <hr className="sudo" />
              <h6 className="descriptione">description</h6>
              <hr className="sudo" />
              <h4 className="productr">about the product</h4>
              <p className="product_descri">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio impedit autem aperiam tempore quos. Suscipit
                recusandae voluptatibus repudiandae aut error.
              </p>
              <ul className="product_ulr">
                <li>
                  <FaRegDotCircle className="dvx" />
                  100% Cotton
                </li>
                <li>
                  <FaRegDotCircle className="dvx" />
                  260gsm
                </li>
                <li>
                  <FaRegDotCircle className="dvx" />
                  Breathable Fabric
                </li>
              </ul>
              <hr className="sudo" />
              <h4 className="productr">SIZE & FIT</h4>
              <ul className="product_ulr">
                <li>
                  {" "}
                  <FaRegDotCircle className="dvx" />
                  Model is wearing size M and is 6'1"
                </li>
                <li>
                  {" "}
                  <FaRegDotCircle className="dvx" />
                  Standard fit for a relaxed, easy feel
                </li>
                <li>
                  {" "}
                  <FaRegDotCircle className="dvx" />
                  100% Cotton
                </li>
              </ul>
              <hr className="sudo" />
              <h4 className="productr">FREE DELIVERY & RETURNS</h4>
              <p className="product_descri">
                Free standard delivery on orders over $60.
              </p>
              <ul className="product_ulr">
                <li>
                  {" "}
                  <FaRegDotCircle className="dvx" />
                  You can return your order for any reason, free of charge,
                  within 30 days
                </li>
                <li>
                  {" "}
                  <FaRegDotCircle className="dvx" />
                  We also offer a Free-of-Charge shipping label
                </li>
              </ul>
            </div>
            {lightboxIsOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={closeLightbox}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
          </div>
          <span className="meow">related products</span>
     
          <RelatedItems category={itemData.cat} />
        </>
      )}
    </div>
  );
};

export default SingleItemDetail;
