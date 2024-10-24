// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing/index.jsx";
import EventDetailsAndPayment from "./pages/events/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event/:id",
    element: <EventDetailsAndPayment />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;