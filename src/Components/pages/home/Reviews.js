import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://secret-brook-35937.herokuapp.com/review`, {})
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-8 px-12 py-12 bg-[#F2F2F2]  ">
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
