import React, { createContext, useContext } from "react";

const MyContext = createContext();
const MyProvider = ({ children }) => {
  const name = "mehdi";

  const data = { name };

  return (
    <>
      <MyContext.Provider value={data}>{children}</MyContext.Provider>
    </>
  );
};

const useAppContext = () => useContext(MyContext);

export { MyProvider, useAppContext };
