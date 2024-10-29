// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/rootLayout.jsx";
import Home from "./pages/landing/index.jsx";
import EventDetailsAndPayment from "./pages/events/index.jsx";
import TermsAndConditions from "./pages/terms/components/t&c.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <EventDetailsAndPayment />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
