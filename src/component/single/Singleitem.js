// SingleItemDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import data from "../category/data.json";

const SingleItemDetail = () => {
  const { category, itemId } = useParams();
  console.log("Category:", category);
  console.log("Item ID:", itemId);
  const itemData = data[category]?.find((item) => item.id === parseInt(itemId, 10));

  if (!itemData) {
    return <div>Item not found</div>;
  }

  return (
    <div className="single_item_detail">
      <img src={itemData.image} alt={itemData.name} />
      <h2>{itemData.name}</h2>
      <p>Category: {itemData.cat}</p>
      <p>
        Price: ${itemData.price.min} - ${itemData.price.max}
      </p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SingleItemDetail;
