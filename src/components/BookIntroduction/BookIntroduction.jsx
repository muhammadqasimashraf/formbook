import React from "react";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";

const BookIntroduction = ({ parentArray }) => {
  return (
    <div>
      <div className="text-white  text-center">
        <div className="heading">
          <h1 className="mt-4 mb-4 bookHeadingOne">
            {parentArray[0].firstBook.BookIntro.heading}
          </h1>
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
        <div className="subheading">
          {parentArray[0].firstBook.BookIntro.subHeading.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <button type="button" className="btn btn-success btn-sm btn-text mt-5">
          {parentArray[0].firstBook.BookIntro.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default BookIntroduction;
