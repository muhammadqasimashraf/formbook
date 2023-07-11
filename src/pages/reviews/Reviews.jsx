import React from "react";

import Card from "../../components/Card/Card";
import { parentArray, ReviewPage } from "../../config/data";

const Reviews = () => {
  return (
    <div className="reviewsPage">
      <div className="text-center  reviewHeading">
        <h1 className="reviewsHeading text-center">
          {" "}
          Here's what people say about our books:
        </h1>
        <h1 className="reviewsHeading"> Builder Book and SaaS Boilerplate.</h1>
        <p className=" mb-5 text-center ReviewPageParagraph ">
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
      <div className="row align-items-center  my-0 cardspadding reviewsMarginTop">
        {parentArray[0].ReviewPage.map((item) => (
          <div className="col-md-4 p-2 col-sm-6 text-white ">
            <div className="data p-2 px-4  mb-2 reviewColor  rounded ms-5 ">
              <Card item={item} margin={"mb - 2"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
