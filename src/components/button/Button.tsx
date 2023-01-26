import React from "react";

import styles from "./Button.module.scss";

interface Props {
  children: any;
  type?: any;
  onClick?: () => void;
  className: string;
  disabled?: boolean;
}

const Button = ({ children, type, onClick, className, disabled }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
