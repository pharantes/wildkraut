const { render } = require("@testing-library/react");
const { createMemoryHistory } = require("history");
const React = require("react");
const { Router } = require("react-router-dom");

it("works good", () => {
  const history = createMemoryHistory();
  render(<Router location={history.location} navigator={history}></Router>);
});
