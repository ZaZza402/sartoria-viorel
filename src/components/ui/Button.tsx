import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "btn inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "btn-primary bg-brand-primary text-brand-base hover:bg-brand-primary-hover border-2 border-brand-primary hover:border-brand-primary-hover",
    secondary:
      "btn-secondary bg-brand-accent text-brand-text hover:bg-brand-accent-dark border-2 border-brand-accent hover:border-brand-accent-dark",
    outline:
      "btn-outline border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-base",
    ghost: "btn-ghost text-brand-text hover:bg-brand-accent",
  };

  const sizes = {
    sm: "btn-sm px-3 py-1.5 text-sm",
    md: "btn-md px-4 py-2 text-base",
    lg: "btn-lg px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
