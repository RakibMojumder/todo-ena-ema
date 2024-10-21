"use client";

import Input from "@/components/input/Input";
import Modal from "../modal/Modal";
import Select from "@/components/select/Select";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import styles from "./search.module.css";
import { allPriorities } from "@/constant/todoPriority";

const SearchTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.search_todo_btn}
        onClick={() => setIsOpen(true)}
      >
        <FiSearch size={22} />
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalHeader="Search Todo">
        <div>
          <div className={styles.search_todo}>
            <Input label="Search Box" placeHolder="Search ..." />
            <Input label="Category" placeHolder="Enter category" />
            <Select
              //   value={selectedOption}
              //   onChange={(e) => setSelectedOption(e.target.value)}
              options={allPriorities}
              label="Select priority"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SearchTodo;
