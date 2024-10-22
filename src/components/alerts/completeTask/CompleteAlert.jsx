"use client";

import styles from "./complete.module.css";
import { useState } from "react";
import Alert from "../alert/Alert";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useUpdateTodoMutation } from "@/redux/features/todos/todos.api";
import { toast } from "react-toastify";

const CompleteAlert = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updateTodo, {}] = useUpdateTodoMutation();

  const handleCompleteTodo = async () => {
    try {
      const res = await updateTodo({
        id: todo._id,
        data: { status: "Completed" },
      });
      setIsOpen(false);
      toast.success(res.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${styles.complete_button} ${
          todo.status === "Completed" ? `todo_complete` : ""
        }`}
      >
        <IoCheckmarkDoneOutline size={20} />
      </button>
      <Alert isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <p style={{ textAlign: "center" }}>Your task is complete?</p>
          <div className={styles.alert_btn_container}>
            <button
              onClick={() => setIsOpen(false)}
              className={styles.cancel_btn}
            >
              Cancel
            </button>
            <button onClick={handleCompleteTodo} className={styles.yes_btn}>
              Yes
            </button>
          </div>
        </div>
      </Alert>
    </>
  );
};

export default CompleteAlert;
