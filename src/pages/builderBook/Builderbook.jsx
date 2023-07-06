import React from "react";

import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import {
  Reviews,
  BookIntroduction,
  chapters,
  Authors,
  aboutUs,
  features,
} from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  return (
    <div>
      <div className="text-white page1 text-center">
        <div className="heading">
          <h1 className="mt-4 mb-4 bookHeadingOne">
            {BookIntroduction.heading}
          </h1>
        </div>
        <div className="row btn-holder m-0 justify-content-around">
          <div className="mb-3">
            <button type="button" class="btn btn-light mr-2 ">
              <AiFillGithub />
              <span className="font-weight-bold">Star</span>
            </button>
            <button type="button" class="btn btn-light ">
              <span className="font-weight-bold">3552</span>
            </button>
          </div>
        </div>
        <div className="subheading">
          {BookIntroduction.subHeading.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <button type="button" className="btn btn-success btn-sm btn-text mt-5">
          {BookIntroduction.previewbtnText}
        </button>
      </div>
      <div className="row mx-0 mt-5 cardContainer cardPadding">
        {Reviews.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <div className="buttons d-flex justify-content-center align-items-center mt-2 ">
        <button className="m-3 text-white btn shadow-none ml-3 navbtn">
          <span>See all Reviews</span>
        </button>
        <button className="m-3 text-white btn shadow-none ml-3 navbtn">
          {" "}
          <span>About Us</span>
        </button>
      </div>
      <h1 className="text-center text-white mt-3">
        {" "}
        {BookIntroduction.whyBookHeading}
      </h1>

      <div>
        <div className="row mt-3 text-align-left cardPadding ">
          {BookIntroduction.features.map((item, index) => (
            <div key={index} className="text-white col-lg-6 mt-5 ">
              <p className="font-weight-bold">{item.paragraphHeading}</p>
              <p className="featureDiv">{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="text-white text-center mt-5">
          <h1 className="tblOfContent">
            {BookIntroduction.tableofcontentHeading}
          </h1>
          <button
            type="button"
            className="btn btn-success btn-sm btn-text mt-5"
          >
            {BookIntroduction.previewbtnText}
          </button>
        </div>

        <div
          className="d-flex mt-5 booksData  MuiGrid-container MuiGrid-justify-content-xs-space-around "
          align="flex-start"
        >
          {chapters[0].firstfive.map((item) => (
            <div className="  col-xs-12 col-sm-6" style={{ textAlign: "left" }}>
              <ul className="text-white bg-dark rounded p-4 ">
                <div>
                  <a href="#" className="chapterLink">
                    {" "}
                    <div style={{ marginLeft: "-15px" }}>
                      {" "}
                      {item.chapterName}
                    </div>
                  </a>

                  {item.topics.map((item) =>
                    item.isList ? (
                      <div className="ml-4">
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li>{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <div className="ml-4">
                        <li>{item.topic}</li>
                      </div>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
          {chapters[1].secondfive.map((item) => (
            <div className="  col-xs-12 col-sm-6" style={{ textAlign: "left" }}>
              <ul className="text-white bg-dark rounded p-4 ">
                <div>
                  <a href="#" className="chapterLink">
                    {" "}
                    <div style={{ marginLeft: "-15px" }}>
                      {" "}
                      {item.chapterName}
                    </div>
                  </a>

                  {item.topics.map((item) =>
                    item.isList ? (
                      <div className="ml-4">
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li>{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <div className="ml-4">
                        <li>{item.topic}</li>
                      </div>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}

          <div className="text-center text-white mt-5 align-items-center d-flex justify-content-center align-items-center m-auto">
            <h1> {Authors.headingOfAuthors}</h1>
            <p>{Authors.subHeadingofAuthors}</p>
            <div className="d-flex flex-column justify-content-center align-items-center  mt-2 ">
              <div className="d-flex justify-content-center align-items-center">
                {Authors.authorsData.map((item) => (
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
              <div>
                <span className="we">WE:</span>
                <ul className="about-us text-left">
                  {aboutUs.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builderbook;
