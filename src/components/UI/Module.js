import classes from "./Module.module.css";
import { Fragment } from "react";
import { ReactDOM } from "react";
const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModuleOverlay = (props) => {
  return (
    <div className={classes.module}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const protalElement = document.getElementById("overlays");
const Module = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, protalElement)}
      {ReactDOM.createPortal(
        <ModuleOverlay>{props.children}</ModuleOverlay>,
        protalElement
      )}
    </Fragment>
  );
};
export default Module;
