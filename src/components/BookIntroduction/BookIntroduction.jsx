import { Height } from "@mui/icons-material";
import React from "react";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";

const BookIntroduction = ({ item }) => {
  return (
    <div className="BookIntroMargin">
      <div className="text-center introductionSection">
        <div className="heading">
          <h1 className=" mb-4 bookHeadingOne">{item.BookIntro.heading}</h1>
        </div>
        <div className="row btn-holder m-0 justify-content-around mr-2 mt-1">
          <div className="mb-3 mr-2 topDivofIntroButtons">
            <button
              type="button"
              className=" btn-light mr-1 font-weight-bold btnPadding shadow-none    IntroBtnText "
            >
              <AiFillGithub style={{ width: "30px", height: "22px" }} />
              <span className="fw-bolder">Star</span>
            </button>

            <button
              type="button"
              className=" btn-light font-weight-bold  shadow-none  IntroBtnText2 "
            >
              <span className="fw-bold spanHover">3,552</span>
            </button>
          </div>
        </div>
        <div className="subheading">
          {item.BookIntro.subHeading.map((item) => (
            <p dangerouslySetInnerHTML={{ __html: item }}></p>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-sm btn-text mt-4 font-weight-normal text-white shadow-none previewBtn mb-4"
        >
          {item.BookIntro.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default BookIntroduction;
