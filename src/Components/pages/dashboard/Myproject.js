import React from "react";
import project1 from "../../../assets/images/warehoues.png";
import project2 from "../../../assets/images/food.png";
const Myproject = () => {
  return (
    <div>
      <h1 className=" font-bold text-xl uppercase text-center my-8">
        Some of my <span className="text-orange-300">projects</span>
      </h1>
      <div className="grid lg:grid-cols-3 gap-5 px-12 py-10">
        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img src={project1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Ware House Management System</h2>

            <div class="card-actions justify-end">
              <a
                href="https://email-password-auth-c6bbf.web.app/"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
        <div class="card max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img src={project2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title"> Food Gallery</h2>

            <div class="card-actions justify-end">
              <a
                href="https://hungriology.netlify.app/?fbclid=IwAR1NuYaeZTPI7NYQYgb_2JfrKDv4hdLfofoWRznBbTNIIQsRVDWaHAdFqmc#home"
                className="btn btn-secondary"
                target="_blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
