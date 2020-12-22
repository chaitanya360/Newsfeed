import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ToDoWithBootstrap from "./ToDoApp/ToDoAppIndex.js";
// import ArrayAppIndex from "./AlgoRhytm/Searching/ArrayAppIndex.js";
// import SortingIndex from "./AlgoRhytm/Sorting/SortingIndex";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import CrickIndex from "./CrickScore/crickIndex";
import TechNewsIndex from "./TechNews/techNewsIndex";

ReactDOM.render(
  <React.StrictMode>
    <TechNewsIndex />
  </React.StrictMode>,
  document.getElementById("root")
);
