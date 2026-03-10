import React, { Suspense } from "react";
import LoadingState from "./components/LoadingState";

// Lazy load dashboard for better performance
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
