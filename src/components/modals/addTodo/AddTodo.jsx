import styles from "./addTodo.module.css";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import TextArea from "@/components/textarea/TextArea";
import { useState } from "react";
import Modal from "../modal/Modal";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Add Todo</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <form action="" className={styles.add_todo_form}>
            <Input label="Todo Name" placeHolder="Enter todo name" />
            <Input label="Category" placeHolder="Enter category" />
            <Select
              //   value={selectedOption}
              //   onChange={(e) => setSelectedOption(e.target.value)}
              options={options}
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
