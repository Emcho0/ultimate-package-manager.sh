import { Route, Router } from "@solidjs/router";
// komponente web stranice
import Index from "./pages/Index.tsx";
import AppDetails from "./pages/AppDetails.tsx";
import Docs from "./pages/Docs.tsx";
import Install from "./pages/Install.tsx";

const App = () => {
  return (
    <>
      <Router>
        <Route path="/docs" component={Docs} />
        <Route path="/install" component={Install} />
        <Route path="/" component={Index} />
        <Route path="/:selectedApp" component={AppDetails} />
      </Router>
    </>
  );
};

export default App;
