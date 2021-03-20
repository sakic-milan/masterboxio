import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: "string";
}

const Input: FC<InputProps> = ({ value, onChange, label, ...restProps }) => {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        id="testId"
        name="name"
        onChange={onChange}
        placeholder="placeholder"
        required={false}
        type="string"
        value={value}
      />
    </div>
  );
};

export default Input;
