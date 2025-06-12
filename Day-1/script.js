let div = document.getElementById("root");
let h1 = React.createElement("h1", {}, "hello parul");
let h2 = React.createElement("h2", {}, "hello parul");
let h3 = React.createElement("h3", {}, "hello parul");
let h4 = React.createElement("h4", {}, "hello parul");
let h5 = React.createElement("h5", {}, "hello parul");
let h6 = React.createElement("h6", {}, "hello parul");
console.log(h1, h2, h3, h4, h5, h6);

const imageElement = React.createElement("img", {
  src: "ironman.jpeg",
  alt: "Iron Man",
});

const tableElement = React.createElement(
  "table",
  {
    border: 1,
    cellPadding: 10,
  },
  [
    // Table head
    React.createElement(
      "thead",
      {},
      React.createElement("tr", {}, [
        React.createElement("th", {}, "ID"),
        React.createElement("th", {}, "Name"),
        React.createElement("th", {}, "Content"),
      ])
    ),
    // Table body
    React.createElement("tbody", {}, [
      React.createElement("tr", {}, [
        React.createElement("td", {}, "1"),
        React.createElement("td", {}, "Iron Man"),
        React.createElement("td", {}, "Genius"),
      ]),
      React.createElement("tr", {}, [
        React.createElement("td", {}, "2"),
        React.createElement("td", {}, "Captain America"),
        React.createElement("td", {}, "Super Soldier"),
      ]),
      React.createElement("tr", {}, [
        React.createElement("td", {}, "3"),
        React.createElement("td", {}, "Thor"),
        React.createElement("td", {}, "God of Thunder"),
      ]),
    ]),
  ]
);
const app = React.createElement("div", {}, [
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  imageElement,
  tableElement,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
