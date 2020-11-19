import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>Hello world Project B (React)</div>;
}

window.loadProjectB = (elementToAttachTo) => {
  ReactDOM.render(<App />, elementToAttachTo);
};

window.unloadProjectB = (el) => {
  ReactDOM.unmountcomponentatnode(el);
};
