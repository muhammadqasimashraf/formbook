import React from "react";

const BookFeatures = ({ item }) => {
  return (
    <div>
      <h1 className="text-center mt-5">{item.whyBookHeading}</h1>
      <div className="row featuresMarginTop text-align-left BookFeatureColor  ">
        {item.featuresArray.map((item, index) => (
          <div key={index} className="col-lg-6  featurePading mb-3  ">
            <p className="font-weight-bold">{item.paragraphHeading}</p>
            <p className="featureDiv featurelink">
              <p dangerouslySetInnerHTML={{ __html: item.paragraph }}></p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFeatures;
