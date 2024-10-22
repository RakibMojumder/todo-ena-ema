"use client";

import styles from "./delete.module.css";
import { useState } from "react";
import Alert from "../alert/Alert";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useUpdateTodoMutation } from "@/redux/features/todos/todos.api";
import { useDispatch } from "react-redux";
import { setDeletedTodo, setTimer } from "@/redux/features/todos/todos.slice";

const DeleteAlert = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [updateTodo, {}] = useUpdateTodoMutation();

  const handleDeleteTodo = async () => {
    try {
      const res = await updateTodo({
        id: todo._id,
        data: { isDeleted: true },
      }).unwrap();
      setIsOpen(false);
      dispatch(setDeletedTodo(todo));
      dispatch(setTimer(true));
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.delete_button}>
        <MdDelete size={20} />
      </button>

      <Alert isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <p>Are your sure want to delete this?</p>
          <div className="alert_btn_container">
            <button onClick={() => setIsOpen(false)} className="cancel_btn">
              Cancel
            </button>
            <button onClick={handleDeleteTodo} className="yes_btn">
              Yes
            </button>
          </div>
        </div>
      </Alert>
    </>
  );
};

export default DeleteAlert;
