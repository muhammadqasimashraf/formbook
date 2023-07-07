import React from "react";

const ReviewsPageCard = ({ item }) => {
  console.log(item);
  let url = "#";

  return (
    <div
      className="d-flex mt-5  MuiGrid-container MuiGrid-justify-content-xs-space-around "
      align="flex-start"
    >
      <div
        className="  col-xs-12 col-sm-4 p-0 mb-5"
        style={{ textAlign: "left" }}
      >
        {item.firstDiv.map((item) => (
          <div className="data p-3 mb-2 reviewColor  rounded ">
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
        ))}
      </div>
      <div
        className="  col-xs-12 col-sm-4 p-2 mb-5 "
        style={{ textAlign: "left" }}
      >
        {item.secondDiv.map((item) => (
          <div className="data p-3 mb-2 reviewColor  rounded ">
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
        ))}
      </div>
      <div
        className="  col-xs-12 col-sm-4 p-2 mb-5 "
        style={{ textAlign: "left" }}
      >
        {item.thirdDiv.map((item) => (
          <div className="data p-3 mb-2 reviewColor  rounded ">
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
        ))}
      </div>
    </div>
  );
};

export default ReviewsPageCard;
