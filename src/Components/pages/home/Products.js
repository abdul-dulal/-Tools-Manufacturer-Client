import React, { useEffect, useState } from "react";
import Proudct from "./Proudct";

const Products = () => {
  const [products, setProducts] = useState([]);
  // const newProduct = products?.slice(0, 6);

  useEffect(() => {
    fetch(`http://localhost:4000/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="1000"
      >
        <h1 className="uppercase text-3xl font-bold">Available Products</h1>
        <p className="text-lg">
          All best seller product are now available for you and your can buy
          this <br />
          product from here any time any where so sop now
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 px-12 my-8">
        {products?.slice(0, 6).map((product) => (
          <Proudct key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
<h1>Available Products</h1>;
