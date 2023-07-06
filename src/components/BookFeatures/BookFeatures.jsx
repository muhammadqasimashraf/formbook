import React from "react";

const BookFeatures = ({ parentArray }) => {
  return (
    <div>
      <div className="row mt-3 text-align-left cardPadding ">
        {parentArray[0].firstBook.BookIntro.features.map((item, index) => (
          <div key={index} className="text-white col-lg-6 mt-5 ">
            <p className="font-weight-bold">{item.paragraphHeading}</p>
            <p className="featureDiv">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFeatures;
