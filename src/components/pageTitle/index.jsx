import React from "react";
import classNames from "classnames";
import { getApplicationState } from "../../state/slices/Application"
import Alert from "../dashboard/alert"
import {useSelector} from "react-redux"

const PageTitle = ({ title, subtitle, className, ...attrs }) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0",
    "col-12",
    "col-sm-4"
  );
  const { application } = useSelector(getApplicationState)
  return (
    <div className={classes} { ...attrs }>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
      <h3 className="page-title">{title}</h3>
      {application.flushMessage && <Alert alert={application.flushMessage} />}
    </div>
  )
};


export default PageTitle;