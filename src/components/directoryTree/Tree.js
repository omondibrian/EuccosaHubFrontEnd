import React from "react";
import "./Tree.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Directory from "./Directory";
import TreeData from "../../assets/tree.json";

function Tree() {
  return (
    <div className="tree">
      <h5 className="text-center">//npm run tree - to update this project tree structure</h5>
      <ul>
        <Directory directory={TreeData[0]} />
      </ul>
    </div>
  );
}

export default Tree;
