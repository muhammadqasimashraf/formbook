import React from "react";

import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import {
  cardData,
  BookIntroduction,
  bookContentData,
  Footer,
  aboutUs,
} from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  return (
    <div>
      <div className="text-white page1 text-center">
        <div className="heading">
          <h1 className="mt-5 mb-4">{BookIntroduction.heading}</h1>
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
        <div className="content container small">
          {BookIntroduction.subHeading}
        </div>
        <button type="button" className="btn btn-success btn-sm btn-text mt-5">
          {BookIntroduction.previewbtnText}
        </button>
      </div>
      <div className="row mx-0 mt-5 cardContainer">
        {cardData.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <div className="buttons d-flex justify-content-center align-items-center mt-2 ">
        <button className="p-2 m-3  border-light text-white btn shadow-none">
          <span className="p-3">See all Reviews</span>
        </button>
        <button className="p-2 m-3 text-white border-light btn shadow-none">
          {" "}
          <span className="p-3">About Us</span>
        </button>
      </div>
      <h1 className="text-center text-white mt-3">
        {" "}
        {BookIntroduction.whyBookHeading}
      </h1>

      <div>
        <div className="row mt-5 text-align-left">
          {BookIntroduction.bookContent.map((item, index) => (
            <div key={index} className="text-white col-lg-6 mt-5">
              <p className="font-weight-bold">{item.paragraphHeading}</p>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="text-white text-center">
          <h1>{BookIntroduction.tableofcontentHeading}</h1>
          <button
            type="button"
            className="btn btn-success btn-sm btn-text mt-5"
          >
            {BookIntroduction.previewbtnText}
          </button>
        </div>

        <div className="row mt-5 booksData">
          {bookContentData.map((item) => (
            <div className=" col-lg-6 col-md-12 col-sm-12">
              <ul className="text-white bg-dark rounded p-4 ">
                <div>
                  <li>
                    <a href="#"> {item.chapterName}</a>
                  </li>
                  {item.data.map((item) =>
                    item.isList ? (
                      <div>
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li>{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <li>{item.topic}</li>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-white mt-5">
          <h1> {Footer.headingOfFooter}</h1>
          <p>{Footer.subHeadingofFooter}</p>
          <div className="row">
            {Footer.authorsData.map((item) => (
              <div className="col-md-6 col-lg-6 col-sm-12">
                <img
                  src={item.img}
                  alt=""
                  className="w-75px rounded-circle text-center "
                  width={80}
                />
              </div>
            ))}

            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 ">
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
  );
};

export default Builderbook;
