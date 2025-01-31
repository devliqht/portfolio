import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import SuspenseLoader from "@/components/SuspenseLoader";
import { Analytics } from '@vercel/analytics/react';

const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <AppRoutes />
      </Suspense>
      <Analytics />
    </Router>
  );
}

export default App;