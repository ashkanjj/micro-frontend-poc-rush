import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>Hello world Project A (React)</div>;
}

window.loadProjectA = (elementToAttachTo) => {
  ReactDOM.render(<App />, elementToAttachTo);

};

window.unloadProjectA = (el) => {
  ReactDOM.unmountcomponentatnode(el);
};
