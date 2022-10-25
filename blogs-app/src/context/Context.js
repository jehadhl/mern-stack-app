import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INIT_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INIT_STATE); // INIT_ STATE NO UPDATE

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INIT_STATE); //INIT_STATE UPDATE INIT STATE
  console.log(state); // EQUL INIT_STATE

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
