import { h } from "preact";
import { Router, Route } from "wouter-preact";
import IndexPage from "../components/indexPage/IndexPage.js";

const App = () => {
  return (
    <Router>
      <Route path="/" component={IndexPage} />
    </Router>
  );
};

export default App;
