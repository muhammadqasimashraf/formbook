import React from "react";

const Chapters = ({ parentArray }) => {
  return (
    <div>
      <div
        className="d-flex mt-5 booksData  MuiGrid-container MuiGrid-justify-content-xs-space-around "
        align="flex-start"
      >
        <div
          className="  col-xs-12 col-sm-6 p-0 mb-5"
          style={{ textAlign: "left" }}
        >
          {parentArray[0].firstBook.chapters[0].firstfive.map((item) => (
            <div className="mb-4">
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
        </div>
        <div
          className="  col-xs-12 col-sm-6   chaptersMarginleft "
          style={{ textAlign: "left" }}
        >
          {parentArray[0].firstBook.chapters[1].secondfive.map((item) => (
            <div className="mb-4">
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
        </div>
      </div>
    </div>
  );
};

export default Chapters;
