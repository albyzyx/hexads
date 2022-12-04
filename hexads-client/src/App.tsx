import React from "react";
import Container from "./components/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useConfig from "./hooks/useConfig";
import LoadApp from "./components/common/LoadApp";

const App = () => {
  const config = useConfig();
  return (
    <div className="App font-montserrat">
      {config.user_type === "none" ? <LoadApp /> : <Container />}
      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
