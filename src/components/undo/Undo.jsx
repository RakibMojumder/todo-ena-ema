"use client";

import { useSelector } from "react-redux";
import styles from "./undo.module.css";
import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setTimer } from "@/redux/features/todos/todos.slice";
import { useUpdateTodoMutation } from "@/redux/features/todos/todos.api";
import { toast } from "react-toastify";

const Undo = () => {
  const dispatch = useDispatch();
  const { timer, deletedTodo } = useSelector((state) => state.todo);
  const [updateTodo, {}] = useUpdateTodoMutation();
  const timeoutRef = useRef(null);

  // start timer for undo todo
  useEffect(() => {
    if (deletedTodo) {
      timeoutRef.current = setTimeout(() => {
        dispatch(setTimer(false));
      }, 6000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [deletedTodo, dispatch]);

  // Undo deleted todo
  const handleUndoTodo = async () => {
    try {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      await updateTodo({
        id: deletedTodo._id,
        data: { isDeleted: false },
      });
      dispatch(setTimer(false));
      toast.success("Undo todo successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <AnimatePresence>
        {timer && (
          <m.div
            initial={{ y: 100 }}
            animate={{ y: 0, transition: { duration: 0.2 } }}
            exit={{ y: 100, transition: { duration: 0.2 } }}
            className={styles.undo}
          >
            <p>Undo the deleted todo</p>{" "}
            <button onClick={handleUndoTodo}>Undo</button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Undo;
