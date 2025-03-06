import { A, Route, Router } from "@solidjs/router";
import Index from "./pages/Index.tsx";
import AppDetails from "./pages/AppDetails.tsx";
import Docs from "./pages/Docs.tsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Route path="/docs" component={Docs} />
        <Route path="/" component={Index} />
        <Route path="/:selectedApp" component={AppDetails} />
      </Router>
    </>
  );
};

export default App;
