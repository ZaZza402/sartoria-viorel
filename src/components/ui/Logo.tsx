import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  isScrolled = false,
}) => {
  const sizes = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <h1
      className={`${sizes[size]} ${className} transition-all duration-500`}
      style={{
        fontFamily: "'Great Vibes', cursive",
        ...(isScrolled
          ? {
              background:
                "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
            }
          : {
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }),
        fontWeight: 400,
        paddingTop: "4px",
        paddingBottom: "4px",
      }}
    >
      Sartoria Viorel D.
    </h1>
  );
};
