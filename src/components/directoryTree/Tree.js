import React from "react";
import "./Tree.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Directory from "./Directory";
import TreeData from "../../assets/tree.json";

function Tree() {
  return (
    <div className="tree">
      <ul>
        <Directory directory={TreeData[0]} />
      </ul>
    </div>
  );
}

export default Tree;
