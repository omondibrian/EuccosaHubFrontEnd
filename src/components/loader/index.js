import React from "react";
import "./index.css";

export function Ellipsis({ text, color = "#fff" }) {
  let loaderStyle = { background: color };

  return (
    <>
      <span>{text}&nbsp;&nbsp;</span>
      <span className="lds-ellipsis">
        <span style={loaderStyle}></span>
        <span style={loaderStyle}></span>
        <span style={loaderStyle}></span>
        <span style={loaderStyle}></span>
      </span>
    </>
  );
}

export function Bars({ text, color = "#fff" }) {
  let loaderStyle = { background: color };
  return (
    <>
      <span>{text}&nbsp;&nbsp;</span>
      <span className="lds-facebook">
        <span style={loaderStyle}></span>
        <span style={loaderStyle}></span>
        <span style={loaderStyle}></span>
      </span>
    </>
  );
}
