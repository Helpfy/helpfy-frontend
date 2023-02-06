import React, { useState } from "react";

export const SearchContext = React.createContext(null);

export const SearchProvider = (props) => {
  const [filter, setFilter] = useState('new');
  const [isLoading, setIsLoading] = useState(true);
  const [asks, setAsks] = useState([]);

  const values = {
    filter,
    setFilter,
    isLoading,
    setIsLoading,
    asks,
    setAsks,
  };

  return (
    <SearchContext.Provider value={values}>{props.children}</SearchContext.Provider>
  );
};
