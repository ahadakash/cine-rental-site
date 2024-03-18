import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Page from "./Page";
import { MovieContex, ThemeContex } from "./contex";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContex.Provider value={{ darkMode, setDarkMode }}>
        <MovieContex.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContex.Provider>
      </ThemeContex.Provider>
    </>
  );
}

export default App;
