import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RoundPreloader from "../components/preloader";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // Adjust the duration (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div >
        <Navbar />
      </div>
      {loading ? (
        <RoundPreloader /> 
      ) : (
        <Outlet /> 
      )}
      <Footer />
    </>
  );
};

export default RootLayout;