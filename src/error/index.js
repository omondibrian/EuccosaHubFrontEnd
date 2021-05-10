import React from "react";
import style from "./index.module.css";

function ErrorText({ error }) {
  return (
    <>
      <div className={style.message}>{error.message}</div>
      <div className={style.errorText}>
        <h1 className={style.large_text}>{error.code}</h1>
      </div>
    </>
  );
}

export default ErrorText;
