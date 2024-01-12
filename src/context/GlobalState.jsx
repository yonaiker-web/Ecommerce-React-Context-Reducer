import React from "react";
import { createContext, useContext, useReducer } from "react";

//creamos el estado global inicial
const initialState = {
  state: [],
};

export const Context = createContext();

export const useGLobalState = ({ children }) => {
  const context = useContext(Context);
  return context;
};

const GlobalState = () => {
  //usamos useEffect para actualizar el estado cada vez que este cambie
  useEffect(() => {
    //convertir el state a json y guardarlo en localstorage
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  return;
  <Context.Provider
    value={{
      state: state.state,
    }}
  >
    {children}
  </Context.Provider>;
};

export default GlobalState;
