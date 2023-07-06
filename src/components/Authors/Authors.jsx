import React from "react";

const Authors = ({ parentArray }) => {
  return (
    <div>
      <div className="text-center text-white mt-5 align-items-center d-flex justify-content-center align-items-center m-auto">
        <h1> {parentArray[0].firstBook.Authors.headingOfAuthors}</h1>
        <p>{parentArray[0].firstBook.Authors.subHeadingofAuthors}</p>
        <div className="d-flex flex-column justify-content-center align-items-center  mt-2 ">
          <div className="d-flex justify-content-center align-items-center">
            {parentArray[0].firstBook.Authors.authorsData.map((item) => (
              <div className="d-flex">
                <div
                  key={item.id}
                  className="d-flex flex-column mr-5 ml-5 mt-5 mb-5"
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
          <div className="AuthorsPadding">
            <span className="we">WE:</span>
            <ul className="text-left">
              {parentArray[0].firstBook.aboutUs.map((item) => (
                <li dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
