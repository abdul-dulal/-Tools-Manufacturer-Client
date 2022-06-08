import React from "react";
import { useNavigate } from "react-router-dom";

const Proudct = ({ product }) => {
  const { name, description, img, quantity, price, _id, miniumqnt } = product;
  const navigate = useNavigate();

  return (
    <div
      class="card w-96 bg-base-100 shadow-xl"
      data-aos="zoom-in"
      data-aos-delay="250"
      data-aos-duration="1000"
    >
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p> Available Quantity {quantity}</p>
        <p> Minimum Order Quantity {miniumqnt}</p>
        <p> Price ${price}</p>
        <div class="card-actions">
          <button
            class="btn btn-primary"
            onClick={() => navigate(`/purchase/${_id}`)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proudct;
