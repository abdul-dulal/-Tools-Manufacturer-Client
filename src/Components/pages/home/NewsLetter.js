import React from "react";
import newsletter from "../../../assets/images/newsletter-bg.png";
const NewsLetter = () => {
  return (
    <div>
      <div class="hero  h-[400px]" style={{ background: `url(${newsletter})` }}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md" data-aos="fade-up" data-aos-duration="3000">
            <p className="text-xl mb-5">
              SPECIAL <span className="text-orange-700">OFFER</span> FOR
              SUBSCRIPTION
            </p>
            <h1 class="mb-5 text-3xl font-bold">
              GET INSTANT DISCOUNT FOR MEMBERSHIP
            </h1>
            <p class="mb-5">
              Subscribe our newsletter and all latest news of our latest
              product, promotion and offers
            </p>
            <input
              type="text"
              placeholder="Enter Your Email Here"
              class="input input-bordered input-primary w-full max-w-xs bg-transparent rounded-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn px-8 py-3 rounded-full"
            />

            {/* <button class="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
