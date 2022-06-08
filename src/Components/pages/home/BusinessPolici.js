import React from "react";
import icon1 from "../../../assets/images/icon-1.png";
import icon2 from "../../../assets/images/icon-2.png";
import icon3 from "../../../assets/images/icon-3.png";

const BusinessPolici = () => {
  return (
    <div className="grid  lg:grid-cols-3 sm:grid-cols-1 gap-5 px-12 my-10 ">
      <div
        class="card card-side bg-base-100 shadow-xl flex items-center"
        data-aos="fade-right"
        data-aos-duration="2500"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        <img src={icon1} className="w-12 h-12" alt="" />
        <div class="card-body">
          <h2 class="card-title">Free Home Delivery</h2>
          <p>Provide free home delivery for all product over $100</p>
        </div>
      </div>
      <div
        class="card card-side bg-base-100 shadow-xl flex items-center"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-delay="200"
      >
        <img src={icon2} className="w-12 h-12" alt="" />
        <div class="card-body">
          <h2 class="card-title">Quality Products</h2>
          <p>We ensure our product quality all times</p>
        </div>
      </div>
      <div
        class="card card-side bg-base-100 shadow-xl flex items-center"
        data-aos="fade-left"
        data-aos-duration="2500"
        data-aos-delay="200"
      >
        <img src={icon3} className="w-12 h-12" alt="" />
        <div class="card-body">
          <h2 class="card-title">Online Support</h2>
          <p>To satisfy our customer we try to give support online</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPolici;
