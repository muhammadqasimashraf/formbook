import React from "react";
import formattedData from "../../config/data";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import data from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  return (
    <div>
      <div className="text-white">
        <div className="heading">{formattedData.heading}</div>
        <div className="row btn-holder m-0 justify-content-around">
          <div className="m-auto">
            <button type="button" class="btn btn-light m-0">
              <AiFillGithub />
              <span>Star</span>
            </button>
            <button type="button" class="btn btn-light m-0">
              <span>3552</span>
            </button>
          </div>
        </div>
        <div className="content container small">
          {formattedData.subHeading}
        </div>
        <button type="button" className="btn btn-success btn-sm btn-text">
          {formattedData.btnText}
        </button>
      </div>
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Builderbook;
