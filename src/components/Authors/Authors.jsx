import React from "react";

const Authors = ({ item }) => {
  return (
    <div>
      <div className="text-center  athorsTopMargin align-items-center d-flex flex-column justify-content-center align-items-center authorsMargin ">
        <div>
          {" "}
          <h1> {item.headingOfAuthors}</h1>
          <p>{item.subHeadingofAuthors}</p>
        </div>

        <div className="d-flex flex-column justify-content-around align-items-center AuthorsPadding  ">
          <div className="d-flex justify-content-around align-items-center authorsWidth ">
            {item.authorsData.map((item) => (
              <div className="d-flex authorsMarginRight ">
                <div
                  key={item.id}
                  className="d-flex flex-column mr-5 ml-5 mt-5 mb-5 "
                >
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-75px rounded-circle text-center mb-3"
                      width={80}
                    />
                  </div>
                  <div>
                    {" "}
                    <a href="#" className="mt-5 authorUrl">
                      {item.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
