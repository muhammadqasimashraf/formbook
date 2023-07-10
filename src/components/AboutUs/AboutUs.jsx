import React from "react";

const AboutUs = ({ item }) => {
  return (
    <div>
      <div className="AuthorsPadding">
        <span className="we">WE:</span>
        <ul className="text-left">
          {item.map((item) => (
            <li
              dangerouslySetInnerHTML={{ __html: item }}
              className="abouUsLink"
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
