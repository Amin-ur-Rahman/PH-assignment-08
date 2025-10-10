import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./assets/logo.png";

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <img src={logo} alt="Loading" className="rotating-img" />
            <span className="loading-text">LOADING</span>
            <img src={logo} alt="Loading" className="rotating-img" />
          </div>
        </div>
      )}
      {!loading && children}
    </>
  );
};

export default Layout;
