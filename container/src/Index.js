import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  const [option, setOption] = useState("");
  function onOptionChange(eve) {
    setOption(eve.target.value);
  }
  return (
    <div>
      <h1>Container App</h1>
      <select onChange={onOptionChange} value={option}>
        <option disabled></option>
        <option>Project A</option>
        <option>Project B</option>
      </select>

      <div className="micro-front-end-container">
        {option === "Project A" && (
          <MicroFrontend name="ProjectA" host={"http://localhost:5050"} />
        )}
        {option === "Project B" && (
          <MicroFrontend name="ProjectB" host={"http://localhost:5060"} />
        )}
      </div>
    </div>
  );
}

function MicroFrontend(props) {
  const scriptId = `micro-frontend-script-${props.name}`;

  function onMicroFrontEndLoad() {
    console.log("container onMicroFrontEndLoad");
    window[`load${props.name}`](document.getElementById("micro-frontend"));
  }

  useEffect(() => {
    function doFetch() {
      // const content = await fetch();
      const script = document.createElement("script");
      script.id = scriptId;
      script.crossOrigin = "";
      script.src = props.host + "/bundle.js";
      script.onload = onMicroFrontEndLoad;
      document.head.appendChild(script);
    }

    doFetch();
  }, [props.host]);
  return <div id="micro-frontend"></div>;
}

ReactDOM.render(<App />, document.getElementById("app"));
