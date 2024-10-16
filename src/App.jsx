import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/landing/index.jsx";
import Payment from "./pages/events/index.jsx";
import MoreDetails from "./pages/events/components/eventDetails.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/event/:id", // Dynamic route for event details
    element: <MoreDetails />, // Renders the MoreDetails component
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
