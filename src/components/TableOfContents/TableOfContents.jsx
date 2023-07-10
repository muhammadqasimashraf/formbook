import React from "react";

const TableOfContents = ({ parentArray }) => {
  return (
    <div>
      <div className="text-center mt-4">
        <h1 className="tblOfContent">
          {parentArray[0].books[0].BookIntro.tableofcontentHeading}
        </h1>
        <button
          type="button"
          className="btn btn-sm btn-text  font-weight-normal text-white shadow-none previewBtn mt-4 "
        >
          {parentArray[0].books[0].BookIntro.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default TableOfContents;
