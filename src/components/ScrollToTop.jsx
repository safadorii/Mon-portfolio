import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() { // Utilisation de useEffect pour exécuter une action (faire défiler la fenêtre) lorsque pathname change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;