import React, { FC, ButtonHTMLAttributes, MouseEvent } from "react";
import styles from "./styles.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ text, ...restProps }) => {
  return (
    <button
      className={styles.button}
      disabled={false}
      onClick={(e) => console.log(e)}
    >
      {text}
    </button>
  );
};

export default Button;
