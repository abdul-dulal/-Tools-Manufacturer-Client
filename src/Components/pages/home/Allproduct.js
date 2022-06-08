import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import product from "../../../assets/images/page-header-bg.png";
const Allproduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://secret-brook-35937.herokuapp.com/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div
        style={{ background: `url(${product})` }}
        className="h-[300px] w-full"
      >
        <h1 className="text-2xl font-bold  text-white h-[300px] uppercase  flex items-center justify-center">
          All <span className="text-orange-300 ml-2">Products</span>
        </h1>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-12 py-12 "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {products?.map((porduct) => (
          <div className="">
            <div class="card  bg-base-100 shadow-xl">
              <figure class="px-10 pt-10">
                <img src={porduct.img} alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{porduct.name}</h2>
                <p>{porduct.description}</p>
                <p> Available Quantity {porduct.quantity}</p>
                <p> Minimum Order Quantity {porduct.miniumqnt}</p>
                <p> Price ${porduct.price}</p>
                <div class="card-actions">
                  <button
                    class="btn btn-primary"
                    onClick={() => navigate(`/purchase/${porduct._id}`)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;
