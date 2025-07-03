import React, { createContext, useContext } from "react";

const MyContext = createContext();
const MyProvider = ({ children }) => {
  //! type here the variables you need to use it in others componenets

  const data = { 
    //? type here the name the variables
   };

  return (
    <>
      <MyContext.Provider value={data}>{children}</MyContext.Provider>
    </>
  );
};

const useAppContext = () => useContext(MyContext);

export { MyProvider, useAppContext };
