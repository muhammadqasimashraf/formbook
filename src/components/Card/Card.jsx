import React from "react";

const Card = ({ item }) => {
  console.log(item);

  return (
    <div className="col-md-3 text-white cardWidth">
      <div className="data p-3 mb-4 bg-dark h-100 rounded">
        <div className="img mt-2 mb-2">
          <img
            src={item.url}
            alt=""
            className="w-75px rounded-circle"
            width={80}
          />
        </div>
        <div className="heading mt-3 mb-3 ">{item.name}</div>
        <div className="comment mt-5 text-center mb-0">{item.comment}</div>
      </div>
    </div>
  );
};

export default Card;
