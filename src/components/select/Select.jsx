import styles from "./select.module.css"; // Optional: for styling

const Select = ({
  value,
  onChange,
  options,
  label,
  className,
  style,
  ...props
}) => {
  return (
    <div>
      {label && <label className={styles.select_label}>{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className={`${styles.select} ${className}`}
        style={style}
        {...props}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
