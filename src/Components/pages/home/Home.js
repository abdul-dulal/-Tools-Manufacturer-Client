import React from "react";
import Banner from "./Banner";
import Brand from "./Brand";
import BusinessPolici from "./BusinessPolici";
import BusinessSummary from "./BusinessSummary";
import Find from "./Find";
import NewsLetter from "./NewsLetter";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <BusinessPolici />
      <Products />
      <BusinessSummary />
      <Find />
      <Reviews />
      <NewsLetter />
      <Brand />
    </div>
  );
};

export default Home;
