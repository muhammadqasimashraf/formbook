import { Height } from "@mui/icons-material";
import React from "react";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";

const BookIntroduction = ({ parentArray }) => {
  return (
    <div className="BookIntroMargin">
      <div className="text-center introductionSection">
        <div className="heading">
          <h1 className=" mb-4 bookHeadingOne">
            {parentArray[0].firstBook.BookIntro.heading}
          </h1>
        </div>
        <div className="row btn-holder m-0 justify-content-around mr-2 mt-1">
          <div className="mb-3 mr-2">
            <button
              type="button"
              className=" btn-light mr-1 font-weight-bold btnPadding     IntroBtnText "
            >
              <AiFillGithub style={{ width: "30px", height: "22px" }} />
              <span className="fw-bold">Star</span>
            </button>
            <button
              type="button"
              className=" btn-light font-weight-bold    IntroBtnText "
            >
              <span className="fw-bold">3,552</span>
            </button>
          </div>
        </div>
        <div className="subheading">
          {parentArray[0].firstBook.BookIntro.subHeading.map((item) => (
            <p dangerouslySetInnerHTML={{ __html: item }}></p>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-sm btn-text mt-4 font-weight-normal text-white shadow-none previewBtn"
        >
          {parentArray[0].firstBook.BookIntro.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default BookIntroduction;
