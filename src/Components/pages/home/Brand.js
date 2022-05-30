import React from "react";
import brand1 from "../../../assets/images/brand-1.png";
import brand2 from "../../../assets/images/brand-2.png";
import brand3 from "../../../assets/images/brand-3.png";
import brand4 from "../../../assets/images/brand-4 (1).png";
import brand5 from "../../../assets/images/brand-5.png";

const Brand = () => {
  return (
    <div className="grid  grid-cols-5  px-12 gap-0 my-8 ">
      <div>
        <img src={brand1} alt="" />
      </div>
      <div>
        <img src={brand2} alt="" />
      </div>
      <div>
        <img src={brand3} alt="" />
      </div>
      <div>
        <img src={brand4} alt="" />
      </div>
      <div>
        <img src={brand5} alt="" />
      </div>
    </div>
  );
};

export default Brand;
