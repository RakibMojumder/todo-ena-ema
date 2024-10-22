"use client";

import styles from "./addTodo.module.css";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import TextArea from "@/components/textarea/TextArea";
import { useState } from "react";
import Modal from "../modal/Modal";
import { FiPlus } from "react-icons/fi";
import { priorities } from "@/constant/todoPriority";
import { toast } from "react-toastify";
import { useAddTodoMutation } from "@/redux/features/todos/todos.api";

const initialState = {
  name: "",
  description: "",
  category: "",
  priority: "",
};

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [addTodo, { isLoading, data }] = useAddTodoMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTodo = async () => {
    const { name, description, category, priority } = formData;

    if (!name || !description || !category || !priority) {
      return toast.error("All field are required");
    }

    try {
      const res = await addTodo(formData).unwrap();
      setIsOpen(false);
      setFormData(initialState);
      toast.success(res?.message);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <button className={styles.add_todo_btn} onClick={() => setIsOpen(true)}>
        <FiPlus size={20} />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalHeader="Add Todo">
        <Modal.Content>
          <div style={{ padding: "20px" }}>
            <form className={styles.add_todo_form}>
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
                value={formData.priority}
                onChange={(e) => handleChange(e)}
                name="priority"
                placeholder={"Select priority"}
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
          <button onClick={handleAddTodo} className={styles.submit_button}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTodo;
