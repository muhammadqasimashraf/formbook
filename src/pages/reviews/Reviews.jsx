import React from "react";
import { ReviewsPage } from "../../config/data";
import ReviewsPageCard from "../../components/ReviewsPageCard/ReviewsPageCard";
import Card from "../../components/Card/Card";
import { parentArray } from "../../config/data";
const Reviews = () => {
  return (
    <div className="reviewsPage">
      <div className="text-center text-white reviewHeading">
        <h1 className="reviewsHeading">
          {" "}
          Here's what people say about our books:
        </h1>
        <h1 className="reviewsHeading"> Builder Book and SaaS Boilerplate.</h1>
        <p className="mt-5 mb-5 text-center">
          With the help of our readers, we've solved over 500 issues and made
          over 1000 improvements/updates (commits) to both of our books (
          <a className="builderbook" href="#">
            builderbook
          </a>{" "}
          and{" "}
          <a className="saas" href="#">
            saas
          </a>{" "}
          ).
        </p>
      </div>
      <div className="row mx-0 mt-5 cardContainer">
        {parentArray[0].firstBook.Reviews.ReviewPage.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
