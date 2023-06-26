import React from "react";
import formattedData from "../../config/data";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";

const Builderbook = () => {
  return (
    <div>
      <div className="bg-dark text-white">
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
        <button type="button" className="btn btn-success small">
          {formattedData.btnText}
        </button>
      </div>
    </div>
  );
};

export default Builderbook;
