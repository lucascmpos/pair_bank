import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      <span className="">{props.label}</span>
      {props.children}
    </button>
  );
};

export default Button;
