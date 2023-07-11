import React from "react";

const AboutUs = ({ item }) => {
  return (
    <div>
      <div className="AuthorsPadding">
        <div className="Authorspadding">
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
    </div>
  );
};

export default AboutUs;
