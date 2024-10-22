"use client";

import styles from "./editTodo.module.css";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import TextArea from "@/components/textarea/TextArea";
import { useState } from "react";
import Modal from "../modal/Modal";
import { priorities } from "@/constant/todoPriority";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import { useUpdateTodoMutation } from "@/redux/features/todos/todos.api";

const EditTodo = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: todo.name,
    description: todo.description,
    category: todo.category,
    priority: todo.priority,
  });
  const [updateTodo, {}] = useUpdateTodoMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditTodo = async () => {
    const { name, description, category, priority } = formData;

    if (!name || !description || !category || !priority) {
      return toast.error("All field are required");
    }

    try {
      await updateTodo({ id: todo._id, data: formData });
      setIsOpen(false);
      toast.success("Todo updated successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${styles.edit_todo_button} ${
          todo?.status === "Completed" ? "todo_complete" : ""
        }`}
      >
        <CiEdit size={20} />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalHeader="Edit Todo">
        <Modal.Content>
          <div style={{ padding: "20px" }}>
            <form className={styles.edit_todo_form}>
              <Input
                name="name"
                label="Todo Name"
                placeHolder="Enter todo name"
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="category"
                label="Category"
                placeHolder="Enter category"
                value={formData.category}
                onChange={(e) => handleChange(e)}
              />
              <Select
                defaultValue={formData.priority}
                onChange={(e) => handleChange(e)}
                name="priority"
                placeholder="Select priority"
                options={priorities}
                label="Select priority"
              />
              <TextArea
                name="description"
                label="Description"
                placeHolder="Enter description"
                value={formData.description}
                onChange={(e) => handleChange(e)}
              />
            </form>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <button onClick={handleEditTodo} className={styles.submit_button}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
