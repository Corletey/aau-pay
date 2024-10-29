import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import RoundPreloader from "../components/preloader";
import { ArrowUp } from "lucide-react";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false); // State to control the visibility of the scroll button
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

  useEffect(() => {
    // Show button when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      {loading ? (
        <RoundPreloader />
      ) : (
        <>
          <Outlet />
          <Footer /> {/* Show Footer only when not loading */}
        </>
      )}

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#5bc0de] hover:bg-[#4cabc7] text-white p-3 rounded-full shadow-lg transition duration-200 ease-in-out"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default RootLayout;
