import React from "react";
import logoSvg from "../../assets/logo/VL.svg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl lg:text-6xl",
  };

  const logoSizes = {
    sm: "40px",
    md: "48px",
    lg: "56px",
    xl: "64px",
  };

  return (
    <div
      className="flex items-center gap-3"
      style={{ paddingBottom: "2px", paddingTop: "8px" }}
    >
      <div
        style={{
          width: logoSizes[size],
          height: logoSizes[size],
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          isolation: "isolate",
        }}
      >
        <img
          src={logoSvg}
          alt="VL Logo"
          style={{
            width: "100%",
            height: "100%",
            transition: "all 500ms",
            display: "block",
          }}
        />
      </div>

      <h1
        className={`${sizes[size]} ${className} transition-all duration-500`}
        style={{
          fontFamily: "'Great Vibes', cursive",
          background:
            "linear-gradient(135deg, #fdfbf7 0%, #d4af37 50%, #b8935f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
          fontWeight: 400,
          paddingTop: "4px",
          paddingBottom: "0px",
          lineHeight: 1.1,
        }}
      >
        Sartoria Vio
      </h1>
    </div>
  );
};
