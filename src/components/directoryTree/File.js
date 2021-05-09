import React from "react";
import json from "../../assets/fileIcons/file_type_light_json.svg";
import storybook from "../../assets/fileIcons/file_type_storybook.svg";
import css from "../../assets/fileIcons/file_type_css.svg";
import js from "../../assets/fileIcons/file_type_js.svg";
import jsx from "../../assets/fileIcons/file_type_reactts.svg";
import jsconfig from "../../assets/fileIcons/file_type_light_jsconfig.svg";
import test from "../../assets/fileIcons/file_type_testts.svg";
import svg from "../../assets/fileIcons/file_type_svg.svg";
// import code from "../../assets/fileIcons/file_type_source.svg";
import imageIcon from "../../assets/fileIcons/file_type_image.svg";


function File({ fileName }) {
  return (
    <li>
      <img
        src={getFileIcon(fileName)}
        width="20px"
        height="20px"
        alt={fileName}
      />
      {fileName}
    </li>
  );
}

export default File;
const getFileIcon = (fileName) => {
  let fileIcon;
  if (/test/.test(fileName)) {
    fileIcon = test;
  } else if (/.css/.test(fileName)) {
    fileIcon = css;
  } else if (/.json/.test(fileName)) {
    fileIcon = json;
  } else if (/.stories/.test(fileName)) {
    fileIcon = storybook;
  } else if (/.jsx/.test(fileName)) {
    fileIcon = jsx;
  } else if (/\w+\.\w+\.js/.test(fileName)) {
    fileIcon = jsconfig;
  } else if (/.js/.test(fileName)) {
    fileIcon = js;
  } else if (/.svg/.test(fileName)) {
    fileIcon = svg;
  } 
  else {
    fileIcon = imageIcon;
  }

  return fileIcon;
};
