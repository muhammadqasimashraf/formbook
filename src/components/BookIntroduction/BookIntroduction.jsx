import React from "react";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";

const BookIntroduction = ({ parentArray }) => {
  return (
    <div className="mt-4">
      <div className="text-center introductionSection">
        <div className="heading">
          <h1 className="mt-4 mb-4 bookHeadingOne">
            {parentArray[0].firstBook.BookIntro.heading}
          </h1>
        </div>
        <div className="row btn-holder m-0 justify-content-around">
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-light mr-2 font-weight-bold btnPadding p-1 px-3 py-0 "
            >
              <AiFillGithub />
              <span className="fw-bold">Star</span>
            </button>
            <button
              type="button"
              className="btn btn-light font-weight-bold btnPadding p-1 px-2 py-0 "
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
          className="btn btn-success btn-sm btn-text mt-4 font-weight-normal previewBtn"
        >
          {parentArray[0].firstBook.BookIntro.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default BookIntroduction;
