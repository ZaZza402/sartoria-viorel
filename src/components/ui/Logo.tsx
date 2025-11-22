import React from "react";
import sartoriaLogo from "../../assets/logo/Sartoria-logo-VioD.webp";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  // Smaller size for mobile, standard size for desktop
  const mobileHeight = "48px";
  const desktopWidth = "160px";

  return (
    <a
      href="#home"
      className="flex items-center logo-link"
      style={{ paddingBottom: "0", paddingTop: "4px" }}
    >
      <img
        src={sartoriaLogo}
        alt="Sartoria Viorel D."
        className={`${className} logo-img`}
        style={{
          height: mobileHeight,
          width: "auto",
          maxWidth: "none",
          display: "block",
          objectFit: "contain",
        }}
      />
      <style>{`
        @media (min-width: 768px) {
          .logo-img {
            height: auto !important;
            width: ${desktopWidth} !important;
          }
        }
      `}</style>
    </a>
  );
};
