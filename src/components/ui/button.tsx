import cn from "@/lib/cn";
import React, { FC, MouseEventHandler, ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  ariaLabel?: string;
  children?: ReactNode; // Added for content inside the Button
}

const Button: FC<IButtonProps> = ({
  className,
  type = "button",
  loading = false,
  disabled = false,
  onClick,
  variant = "primary",
  size = "medium",
  startIcon,
  endIcon,
  ariaLabel,
  children,
}) => {
  const variantClasses = {
    primary:
      "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",
    secondary:
      "text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700",
    danger:
      "text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    success:
      "text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
  };

  const sizeClasses = {
    small: "text-sm px-3 py-1.5",
    medium: "text-md px-5 py-2.5",
    large: "text-lg px-6 py-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      className={cn(
        "font-medium rounded-lg text-center focus:outline-none transition-all duration-150",
        variantClasses[variant],
        sizeClasses[size],
        disabled || loading ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin inline-block" />
      ) : (
        <>
          {startIcon && <span className="me-2">{startIcon}</span>}
          {children}
          {endIcon && <span className="ms-2">{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
