import React from "react";
import PropTypes from "prop-types";
import Header3 from "./Header3";

const Header2 = (props) => {
  return (
    <div>
      Header2{props.appName}
      <div>
        <Header3 appName={props.appName}></Header3>
      </div>
    </div>
  );
};

Header2.propTypes = {};

export default Header2;
