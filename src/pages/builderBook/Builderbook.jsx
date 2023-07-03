import React from "react";

import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import { cardData, formattedData, contentData } from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  return (
    <div>
      <div className="text-white page1 text-center">
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
        <button className="p-2 m-3  border-light text-white btn shadow-none">
          <span className="p-3">See all Reviews</span>
        </button>
        <button className="p-2 m-3 text-white border-light btn shadow-none">
          {" "}
          <span className="p-3">About Us</span>
        </button>
      </div>
      <div>
        <div className="row mt-5 text-align-left">
          {formattedData.bookContent.map((item, index) => (
            <div key={index} className="text-white col-lg-6 mt-5">
              <p className="font-weight-bold">{item.paragraphHeading}</p>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="text-white text-center">
          <h1>{formattedData.tableofcontentHeading}</h1>
          <button
            type="button"
            className="btn btn-success btn-sm btn-text mt-5"
          >
            {formattedData.btnText}
          </button>
        </div>
        <div className="tableOfContentCards text-white"></div>
      </div>
    </div>
  );
};

export default Builderbook;
