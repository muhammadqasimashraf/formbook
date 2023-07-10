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

const SaasBiolerPlate = () => {
  if (parentArray && parentArray.length > 0) {
    return (
      <div className="page1">
        <BookIntroduction item={parentArray[0].books[1]} />
        <div className="row mx-0">
          {parentArray.length !== 0 &&
            parentArray[0].books[1].Reviews.BookPage.map((item) => (
              <Card item={item} key={item.id} />
            ))}
        </div>
        <div className="buttons d-flex justify-content-center align-items-center ">
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
          <BookFeatures item={parentArray[0]?.books[1]?.BookIntro?.features} />
          <TableOfContents parentArray={parentArray} />
          <Chapters item={parentArray[0].books[1].chapters} />
          <Authors item={parentArray[0].books[1].Authors} />
          <AboutUs item={parentArray[0].books[1].aboutUs} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SaasBiolerPlate;
