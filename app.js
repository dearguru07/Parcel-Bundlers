const parent = React.createElement("div", { id: "parent" }, [
  (child = React.createElement(
    "div",
    { id: "child" },
    (heading = React.createElement(
      "h1",
      { id: "heading" },
      "Hello world....."
    )),
    (headingg = React.createElement(
      "h2",
      { id: "heading-2" },
      "Hello world....."
    ))
  )),
  (child = React.createElement(
    "div",
    { id: "child" },
    (heading = React.createElement(
      "h1",
      { id: "heading" },
      "Hello world....."
    )),
    (headingg = React.createElement(
      "h2",
      { id: "heading-2" },
      "Hello world....."
    ))
  )),
]);

// const newParent = React.createElement(
//   "div",
//   { id: "newParent" },
//   React.createElement(
//     "div",
//     { id: "newChid" },
//     React.createElement("h1", { id: "newHeading" }, "Happy Morng To all.."),
//     React.createElement("h1", { id: "newHeading" }, "Hello every One......")
//   )
// );
const conatiner = document.getElementById("box");
const reactRoot = ReactDOM.createRoot(conatiner);
reactRoot.render(parent);
reactRoot.render(newParent);
