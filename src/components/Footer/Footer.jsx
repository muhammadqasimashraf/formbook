import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid w-100 ">
      <div className="row d-flex footerRow justify-content-around align-items-center  ">
        <div>
          <p className="m-0 copyRight">© 2018 - 2023 Builder Book</p>
        </div>
        <div className="footerTerms">
          <a className="footerTerms" href="#">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
