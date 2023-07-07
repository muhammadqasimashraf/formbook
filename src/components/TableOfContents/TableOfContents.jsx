import React from "react";

const TableOfContents = ({ parentArray }) => {
  return (
    <div>
      <div className="text-white text-center mt-5">
        <h1 className="tblOfContent">
          {parentArray[0].firstBook.BookIntro.tableofcontentHeading}
        </h1>
        <button
          type="button"
          className="btn btn-sm btn-text mt-4 font-weight-normal text-white shadow-none previewBtn mt-5"
        >
          {parentArray[0].firstBook.BookIntro.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default TableOfContents;
