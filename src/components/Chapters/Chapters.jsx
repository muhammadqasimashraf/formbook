import React from "react";

const Chapters = ({ item }) => {
  return (
    <div>
      <div
        className="d-flex mt-4 booksData  MuiGrid-container MuiGrid-justify-content-xs-space-around "
        align="flex-start"
      >
        <div
          className="  col-xs-12 col-sm-6 p-0 mb-5"
          style={{ textAlign: "left" }}
        >
          {item[0].firstfive.map((item) => (
            <div className="mb-4">
              <ul className="text-white chapterBackground rounded p-2 ">
                <div>
                  <a href="#" className="chapterLink">
                    {" "}
                    <div
                      style={{ marginLeft: "-15px" }}
                      className="mb-3 marginleftChapterName"
                    >
                      {" "}
                      {item.chapterName}
                    </div>
                  </a>

                  {item.topics.map((item) =>
                    item.isList ? (
                      <div className="ml-5 chapterlistBottomMargin">
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li className="chapterlistBottomMargin">{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <div className="ml-4 chapterlistTopMargin">
                        <li className="chapterlistBottomMargin">
                          {item.topic}
                        </li>
                      </div>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
        </div>
        <div
          className="  col-xs-12 col-sm-6   chaptersMarginleft "
          style={{ textAlign: "left" }}
        >
          {item[1].secondfive.map((item) => (
            <div className="mb-4">
              <ul className="text-white chapterBackground rounded p-4 ">
                <div>
                  <a href="#" className="chapterLink">
                    {" "}
                    <div style={{ marginLeft: "-15px" }} className="mb-4">
                      {" "}
                      {item.chapterName}
                    </div>
                  </a>

                  {item.topics.map((item) =>
                    item.isList ? (
                      <div className="ml-4 mt-1">
                        <li> {item.topic}</li>

                        {item.subTopics.map((item) => (
                          <ul>
                            <li className="mt-1">{item}</li>
                          </ul>
                        ))}
                      </div>
                    ) : (
                      <div className="ml-4 mt-1">
                        <li className="mt-1">{item.topic}</li>
                      </div>
                    )
                  )}
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
