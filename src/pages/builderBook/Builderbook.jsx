import React from "react";
import BookIntroduction from "../../components/BookIntroduction/BookIntroduction";
import BookFeatures from "../../components/BookFeatures/BookFeatures";
import TableOfContents from "../../components/TableOfContents/TableOfContents";
import Chapters from "../../components/Chapters/Chapters";
import Authors from "../../components/Authors/Authors";
import {
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiFillGithub,
} from "react-icons/ai";
import { parentArray } from "../../config/data";
import Card from "../../components/Card/Card";

const Builderbook = () => {
  return (
    <div className="page1">
      <BookIntroduction parentArray={parentArray} />
      <div className="row mx-0 mt-5 ">
        {parentArray[0].firstBook.Reviews.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <div className="buttons d-flex justify-content-center align-items-center mt-1 ">
        <button className="m-3 text-white btn shadow-none ml-3 navbtn">
          <span>See all Reviews</span>
        </button>
        <button className="m-3 text-white btn shadow-none ml-3 navbtn">
          {" "}
          <span>About Us</span>
        </button>
      </div>
      <h1 className="text-center text-white mt-4">
        {" "}
        {parentArray[0].firstBook.BookIntro.whyBookHeading}
      </h1>

      <div>
        <BookFeatures parentArray={parentArray} />
        <TableOfContents parentArray={parentArray} />
        <Chapters parentArray={parentArray} />
        <Authors parentArray={parentArray} />
      </div>
    </div>
  );
};

export default Builderbook;
