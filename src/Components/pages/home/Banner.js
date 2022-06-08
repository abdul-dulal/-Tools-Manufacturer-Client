import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../assets/images/slider-1.png";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div class="hero min-h-screen" style={{ background: `url(${banner})` }}>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="mb-5 text-3xl font-bold uppercase">
            new tecnology &amp; build
          </h1>
          <h1 className="mb-5 uppercase text-5xl font-bold">
            {" "}
            wheels &amp; tires collection
          </h1>
          <button
            class="btn btn-primary"
            onClick={() => navigate("/allproduct")}
          >
            See All product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
