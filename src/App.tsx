import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import SuspenseLoader from "@/components/SuspenseLoader";

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;