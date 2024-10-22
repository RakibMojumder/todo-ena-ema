"use client";

import useDebounce from "@/hooks/useDebounce";
import Todo from "../todo/Todo";
import styles from "./todos.module.css";
import { useSelector } from "react-redux";
import { useGetAllTodosQuery } from "@/redux/features/todos/todos.api";
import Loader from "../loader/Loader";

const Todos = () => {
  const { searchTerm, priority } = useSelector((state) => state.todo);
  const searchValue = useDebounce(searchTerm);
  const { isLoading, data } = useGetAllTodosQuery({ searchValue, priority });

  return (
    <div className={styles.todos_container}>
      {isLoading && <Loader />}
      {data?.data?.length && (
        <div className={styles.todos}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ minWidth: "50px", paddingLeft: "20px" }}>S.N.</th>
                <th>Name</th>
                <th style={{ minWidth: "300px" }}>Description</th>
                <th>Category</th>
                <th>Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((todo, index) => (
                <Todo key={todo._id} todo={todo} serialNo={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Todos;
