import React from "react";

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
    </div>
  );
};

export default Reviews;
