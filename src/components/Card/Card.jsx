import React from "react";

const Card = ({ item, margin }) => {
  console.log(margin, "margin is");
  console.log(item, "inside card component");
  let url = "#";
  console.log("item country", item.country);

  return (
    <div>
      <div className="img imgcardMarginTop mb-2 text-center w-100">
        <img
          src={item.urlThumbnail}
          alt=""
          className="w-75px rounded-circle text-center object-fit-cover"
          width={80}
        />
      </div>

      <div className="heading mt-3 mb-2  text-center">
        <a href={url} className="authorUrl cardNameFontFamiy">
          {item.name}
        </a>
      </div>

      {item.country ? (
        <div className="heading  mb-4 mt-0  text-center ">
          <p className="countryColor mt-0"> {item.country}</p>
        </div>
      ) : null}

      <div className="comment mt-3  featureDiv text-left   mb-0">
        {" "}
        <p>"{item.review}"</p>{" "}
      </div>
    </div>
  );
};

export default Card;
