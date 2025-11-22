import React from "react";

interface NavLink {
  href: string;
  label: string;
}

interface DesktopNavProps {
  links: NavLink[];
  className?: string;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  links,
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="transition-colors duration-200 font-medium"
          style={{ color: "#fdfbf7" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fdfbf7")}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
