import React from "react";
import ReactDOM from "react-dom/client";
//  Hello from React
// const heading = React.createElement("h1", {id:"heading"}, "Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root")) /* here we have created a root where we render our all react elements. This is done by ReactDOM */
// console.log(heading)
// root.render(heading)

// creating nested object like below in react;

// <div id="grandparent">
//     <div id="parent">
//         <h1>Hello I am the child</h1>
//     </div>
// </div>

const grandParent = React.createElement(
  "div",
  { id: "grandparent" },
  [
    React.createElement(
      "div",
      { id: "parent" },
      React.createElement("h1", {}, "Hello I am the child")
    ),
  ],
  [
    React.createElement(
      "div",
      { id: "parent" },
      React.createElement("h1", {}, "Hello h2 tag")
    ),
  ]
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(grandParent);
// root.render(grandParent);

// React.createElement will return an object.
// It is the "render" method which paints React Element as HTML element in the browser.

const heading = React.createElement(
  "h1",
  { class: "heading" },
  "I am a heading"
);
const JSXHeading = <h1>Hello I am JSX heading</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JSXHeading);

// React Element => Javascript Object
// JSX Element => React ELement => Javascript Object
