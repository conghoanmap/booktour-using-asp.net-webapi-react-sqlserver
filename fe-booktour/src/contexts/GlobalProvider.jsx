import React, { createContext, useEffect, useState } from "react";
import { AccountService } from "../services";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [justBookedTour, setJustBookedTour] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchLoggedIn = async () => {
      const loggedIn = await AccountService.isAuthenticated();
      setIsAuthenticated(loggedIn);
    };

    fetchLoggedIn();
  }, []);

  //Fetch roles
  useEffect(() => {
    const fetchRoles = async () => {
      const response = await AccountService.GetRoles();
      setRoles(response);
    };

    fetchRoles();
  }, []);

  const exportValue = {
    isAuthenticated,
    setIsAuthenticated,
    justBookedTour,
    setJustBookedTour,
    roles,
    setRoles,
  };

  return (
    <GlobalContext.Provider value={exportValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
