import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <h1
      className={`${sizes[size]} ${className}`}
      style={{
        fontFamily: "'Great Vibes', cursive",
        color: "#ffffff",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        fontWeight: 400,
      }}
    >
      Sartoria Viorel D.
    </h1>
  );
};
