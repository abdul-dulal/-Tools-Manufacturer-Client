import React from "react";
import { useNavigate } from "react-router-dom";
import car from "../../../assets/images/car.png";
const Find = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center bg-[#F2F2F2] pt-10">
      <h1
        className="text-3xl font-bold my-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        ALL KINDS OF PARTS THAT YOU <br />
        NEED CAN FIND HERE
      </h1>
      <button
        className="btn btn-primary px-8"
        data-aos="fade-left"
        data-aos-delay="250"
        data-aos-duration="2000"
        onClick={() => navigate("/allproduct")}
      >
        {" "}
        See all Product
      </button>
      <img
        src={car}
        className="mx-auto block"
        alt=""
        data-aos="flip-left"
        data-aos-duration="3000"
      />
    </div>
  );
};

export default Find;
