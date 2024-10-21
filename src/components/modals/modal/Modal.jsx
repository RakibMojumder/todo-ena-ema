"use client";

import styles from "./modal.module.css";
import { RxCross2 } from "react-icons/rx";
import { motion as m, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

const Modal = ({ isOpen, setIsOpen, children, modalHeader }) => {
  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.25 } }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
          className={styles.modal_container}
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
            className={styles.modal}
          >
            <div className={styles.modal_header}>
              <span>{modalHeader}</span>{" "}
              <RxCross2
                style={{ cursor: "pointer" }}
                size={24}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className={styles.modal_content}>{children}</div>
            <div className={styles.modal_footer}>
              <button className={styles.modal_submit_button}>Submit</button>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
