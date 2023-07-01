import React from "react";

import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import { cardData, formattedData } from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  return (
    <div>
      <div className="text-white page1">
        <div className="heading">
          <h1 className="mt-5 mb-4">{formattedData.heading}</h1>
        </div>
        <div className="row btn-holder m-0 justify-content-around">
          <div className="mb-3">
            <button type="button" class="btn btn-light mr-2 ">
              <AiFillGithub />
              <span className="font-weight-bold">Star</span>
            </button>
            <button type="button" class="btn btn-light ">
              <span className="font-weight-bold">3552</span>
            </button>
          </div>
        </div>
        <div className="content container small">
          {formattedData.subHeading}
        </div>
        <button type="button" className="btn btn-success btn-sm btn-text mt-5">
          {formattedData.btnText}
        </button>
      </div>
      <div className="row mx-0 mt-5 cardContainer">
        {cardData.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <div className="buttons d-flex justify-content-center align-items-center mt-4 ">
        <button className="p-2 m-3  border-light text-white btn">
          <span className="p-3">See all Reviews</span>
        </button>
        <button className="p-2 m-3 text-white border-light btn">
          {" "}
          <span className="p-3">About Us</span>
        </button>
      </div>
      <div>
        {formattedData.bookContent.map((item, index) => (
          <div key={index} className="text-white row">
            <div className="col-lg-6">
              <p className="font-bold">{item.paragraphHeading}</p>
              <p className="font-bold">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Builderbook;
