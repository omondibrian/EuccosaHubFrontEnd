import React, { useState } from "react";
import File from "./File";

function Directory({ directory, lavel = 1 }) {
  const [expanded, setExpanded] = useState(lavel === 1 ? true : false);
  return (
    <li className={lavel ===1? "root":''}>
      <span
        onClick={() => setExpanded(!expanded)}
        className="file_directory_name"
      >
        {expanded ? (
          <span>
            <i className="material-icons">expand_more</i> &#x1F4C2;{" "}
            {directory.name}
          </span>
        ) : (
          <span>
            <i className="material-icons">chevron_right</i> &#x1F4C1;{" "}
            {directory.name}
          </span>
        )}
      </span>
      <ul className={expanded ? "" : "colapsed"}>
        {directory.contents.map((content) =>
          content.type === "file" ? (
            <File fileName={content.name} />
          ) : (
            <Directory directory={content} lavel="3" />
          )
        )}
      </ul>
    </li>
  );
}

export default Directory;
