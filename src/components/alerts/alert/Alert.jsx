"use client";

import useClickOutside from "@/hooks/useClickOutside";
import styles from "./alert.module.css";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const Alert = ({ children, isOpen, setIsOpen }) => {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.25 } }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
          className={styles.alert_container}
        >
          <m.div
            ref={ref}
            initial={{ y: -50 }}
            animate={{
              y: 0,
              transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
            }}
            exit={{
              y: -50,
              transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
            }}
            className={styles.alert}
          >
            {children}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
