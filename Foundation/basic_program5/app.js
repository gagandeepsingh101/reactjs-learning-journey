const parent = React.createElement("div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            {id: "child"},
            [React.createElement("h1", { id: "heading1" }, "I'am h1 tag"),
            React.createElement("h2", { id: "heading2" }, "I'am h2 tag")]
        ),
        React.createElement(
            "div",
            {id: "child"},
            [React.createElement("h1", { id: "heading1" }, "I'am h1 tag"),
            React.createElement("h2", { id: "heading2" }, "I'am h2 tag")]
        )
    ]
);
const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(parent);
