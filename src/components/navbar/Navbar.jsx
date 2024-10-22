"use client";

import styles from "./navbar.module.css";
import AddTodo from "../modals/addTodo/AddTodo";
import Select from "../select/Select";
import { allPriorities, allStatus } from "@/constant/todoPriority";
import Input from "../input/Input";
import { useDispatch } from "react-redux";
import {
  setPriority,
  setSearchTerm,
  setStatus,
} from "@/redux/features/todos/todos.slice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { searchTerm, priority, status } = useSelector((state) => state.todo);

  return (
    <div className={styles.navbar_container}>
      <h2 className={styles.todos_header}>Todos</h2>
      <div className={styles.navbar_right}>
        {/* Search Box */}
        <Input
          type="search"
          placeHolder="Search here..."
          value={searchTerm}
          className={styles.search_box}
          containerClassName={styles.search_box_container}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        {/* Priority filter */}
        <Select
          value={priority}
          options={allPriorities}
          placeholder="Priority"
          onChange={(e) => dispatch(setPriority(e.target.value))}
          style={{ padding: "8px 12px" }}
        />
        {/* Status filter */}
        <Select
          value={status}
          options={allStatus}
          placeholder="Status"
          onChange={(e) => dispatch(setStatus(e.target.value))}
          style={{ padding: "8px 12px" }}
        />
        {/* Add Todo Modal */}
        <AddTodo />
      </div>
    </div>
  );
};

export default Navbar;
