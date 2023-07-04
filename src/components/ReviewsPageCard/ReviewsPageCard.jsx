import React from "react";

const ReviewsPageCard = ({ item }) => {
  console.log(item);
  let url = "#";

  return (
    <div className=" col-lg-4 col-md-6 col-sm-6 text-white cardWidth mb-3 pl-0 ">
      <div className="data p-3 mb-2 reviewColor h-100 rounded">
        <div className="img mt-2 mb-2 text-center">
          <img
            src={item.urlThumbnail}
            alt=""
            className="w-75px rounded-circle text-center"
            width={80}
          />
        </div>
        <div className="heading mt-3 mb-3  text-center">
          <a href={url} className="authorUrl">
            {" "}
            {item.name}
          </a>
        </div>
        <div className="comment mt-3   mb-0">{item.review}</div>
      </div>
    </div>
  );
};

export default ReviewsPageCard;
