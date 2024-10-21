import styles from "./input.module.css";

const Input = ({
  type = "text",
  placeHolder,
  onChange,
  label,
  style,
  className,
  containerClassName,
  name,
  ...props
}) => {
  return (
    <div className={containerClassName}>
      {label && <label className={styles.input_label}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        className={`${styles.input} ${className}`}
        style={style}
        {...props}
      ></input>
    </div>
  );
};

export default Input;
