import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // ==============================
  // THEME
  // ==============================
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("shinestone-theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);

    localStorage.setItem("shinestone-theme", theme);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  // ==============================
  // WISHLIST
  // ==============================
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("shinestone-wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "shinestone-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const toggleWishlist = (propertyId) => {
    setWishlist((current) => {
      if (current.includes(propertyId)) {
        return current.filter((id) => id !== propertyId);
      }

      return [...current, propertyId];
    });
  };

  const isWishlisted = (propertyId) => {
    return wishlist.includes(propertyId);
  };

  // ==============================
  // LOGIN
  // ==============================
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("shinestone-login") === "true";
  });

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("shinestone-login", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("shinestone-login");
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,

        wishlist,
        toggleWishlist,
        isWishlisted,

        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useApp must be used inside AppProvider"
    );
  }

  return context;
}

export default AppContext;