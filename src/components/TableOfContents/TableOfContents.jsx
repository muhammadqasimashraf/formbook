import React from "react";

const TableOfContents = ({ item }) => {
  return (
    <div>
      <div className="text-center mt-4">
        <h1 className="tblOfContent">{item.tableofcontentHeading}</h1>
        <button
          type="button"
          className="btn btn-sm btn-text  font-weight-normal text-white shadow-none previewBtn mt-4 "
        >
          {item.previewbtnText}
        </button>
      </div>
    </div>
  );
};

export default TableOfContents;
