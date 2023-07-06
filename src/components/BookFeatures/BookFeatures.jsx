import React from "react";

const BookFeatures = ({ parentArray }) => {
  return (
    <div>
      <div className="row mt-5 text-align-left  ">
        {parentArray[0].firstBook.BookIntro.features.map((item, index) => (
          <div key={index} className="text-white col-lg-6  featurePading mb-3 ">
            <p>{item.paragraphHeading}</p>
            <p className="featureDiv">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFeatures;
