import styles from "./input.module.css";

const Input = ({
  type = "text",
  placeHolder,
  onChange,
  label,
  className,
  name,
  ...props
}) => {
  return (
    <div>
      {label && <label className={styles.input_label}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        className={`${styles.input} ${className}`}
        {...props}
      ></input>
    </div>
  );
};

export default Input;
