import React from "react";

const Card = ({ item }) => {
  console.log(item);

  return (
    <div className=" col-lg-3 col-md-6 col-sm-6 text-white cardWidth mb-5">
      <div className="data p-3 mb-4 bg-dark h-100 rounded">
        <div className="img mt-2 mb-2 text-center">
          <img
            src={item.url}
            alt=""
            className="w-75px rounded-circle text-center"
            width={80}
          />
        </div>
        <div className="heading mt-3 mb-3  text-center">{item.name}</div>
        <div className="comment mt-4   mb-0">{item.comment}</div>
      </div>
    </div>
  );
};

export default Card;
