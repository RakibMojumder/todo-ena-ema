import styles from "./textArea.module.css";

const TextArea = ({
  placeHolder,
  onChange,
  label,
  name,
  className,
  style,
  value,
  ...props
}) => {
  return (
    <div>
      {label && <label className={styles.text_area_label}>{label}</label>}
      <textarea
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        rows={6}
        className={`${styles.text_area} ${className}`}
        style={style}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
