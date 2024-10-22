"use client";

import styles from "./loader.module.css";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <FadeLoader
        color="#b9b0b0bb"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
