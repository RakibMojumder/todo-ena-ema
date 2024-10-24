"use client";

import Undo from "@/components/undo/Undo";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootProvider = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        {children}
        <ToastContainer
          theme="light"
          position="bottom-right"
          autoClose={1500}
        />
        <Undo />
      </Provider>
    </div>
  );
};

export default RootProvider;
