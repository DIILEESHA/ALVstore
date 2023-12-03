import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../category/data.json";
import Lightbox from "react-image-lightbox";
import "./single.css";
import "react-image-lightbox/style.css"; // Import the styles
import { CiMaximize1 } from "react-icons/ci";

const SingleItemDetail = () => {
  const { category, itemId } = useParams();
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const itemData = data[category]?.find(
    (item) => item.id === parseInt(itemId, 10)
  );

  if (!itemData) {
    return <div>Item not found</div>;
  }

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
                alt={`Image ${index + 1}`}
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
      <div className="single_sub_item_detail">2</div>

      {/* lightbox */}
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
