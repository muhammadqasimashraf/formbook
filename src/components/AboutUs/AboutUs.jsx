import React from "react";

const AboutUs = ({ item }) => {
  return (
    <div>
      <div className="AuthorsPadding aboutUsMargin">
        <div className="Authorspadding">
          <span className="we mb-2">we:</span>
          <ul className="text-left mt-2">
            {item.map((item) => (
              <li
                dangerouslySetInnerHTML={{ __html: item }}
                className="abouUsLink"
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
