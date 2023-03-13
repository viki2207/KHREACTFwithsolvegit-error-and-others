// Component : Component is part of UI which is responsible for rendering the content.
// ideally you should render the component content in such a way that it should not be split into multiple one, so that we can achieve the reusability of the component.

// there are several types of components are available :
// 1. class based components
// class based components :
//to create a class based component we have to fire a command called rcc
// 2. function based components
// 3. pure components

import React from "react";

const Footer = (props) => {
  return (
    <>
      <h5>
        &copy;www.knowledgehut.com {props.appName} {new Date().getFullYear()}
      </h5>
    </>
  );
};

export default Footer;
