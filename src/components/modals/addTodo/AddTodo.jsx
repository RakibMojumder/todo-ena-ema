"use client";

import styles from "./addTodo.module.css";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import TextArea from "@/components/textarea/TextArea";
import { useState } from "react";
import Modal from "../modal/Modal";
import { FiPlus } from "react-icons/fi";
import { priorities } from "@/constant/todoPriority";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.add_todo_btn} onClick={() => setIsOpen(true)}>
        <FiPlus size={20} />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalHeader="Add Todo">
        <div>
          <form action="" className={styles.add_todo_form}>
            <Input label="Todo Name" placeHolder="Enter todo name" />
            <Input label="Category" placeHolder="Enter category" />
            <Select
              //   value={selectedOption}
              //   onChange={(e) => setSelectedOption(e.target.value)}
              options={priorities}
              label="Select priority"
            />
            <TextArea label="Description" placeHolder="Enter description" />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddTodo;
