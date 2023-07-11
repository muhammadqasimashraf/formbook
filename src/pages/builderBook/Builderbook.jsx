import React from "react";
import BookIntroduction from "../../components/BookIntroduction/BookIntroduction";
import BookFeatures from "../../components/BookFeatures/BookFeatures";
import TableOfContents from "../../components/TableOfContents/TableOfContents";
import Chapters from "../../components/Chapters/Chapters";
import Authors from "../../components/Authors/Authors";
import AboutUs from "../../components/AboutUs/AboutUs";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import { parentArray } from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  if (parentArray && parentArray.length > 0) {
    return (
      <div className="page1">
        <BookIntroduction item={parentArray[0].books[0]} />
        <div className="row mx-0 ">
          {parentArray.length !== 0 &&
            parentArray[0].books[0].Reviews.BookPage.map((item) => (
              <div className="col-lg-3 col-md-6 col-sm-6 text-white text-left cardWidth  mb-4 pl-1 cardSMarginTop ms-2">
                <div className="data pt-3 pl-3  pr-3 pb-0  mb-2 reviewColor h-100 rounded text-left ms-5">
                  <Card item={item} key={item.id} />
                </div>
              </div>
            ))}
        </div>
        <div className="buttons d-flex justify-content-center align-items-center introBtnsTopMargin ">
          <button className="m-2 text-white btn shadow-none ml-3 navbtn">
            <span>See all Reviews</span>
          </button>
          <button className="m-2 text-white btn shadow-none ml-3 navbtn">
            <span>About Us</span>
          </button>
        </div>
        <h1 className="text-center text-white mt-4">
          {parentArray[0]?.firstBook?.BookIntro?.whyBookHeading}
        </h1>

        <div>
          <BookFeatures item={parentArray[0]?.books[0]?.BookIntro?.features} />
          <TableOfContents item={parentArray[0].books[0].BookIntro} />
          <Chapters item={parentArray[0]?.books[0]?.chapters} />
          <Authors item={parentArray[0].books[0].Authors} />
          <AboutUs item={parentArray[0].books[0].aboutUs} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Builderbook;
