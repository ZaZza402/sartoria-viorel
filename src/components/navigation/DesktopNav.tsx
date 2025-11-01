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
    <div className={`hidden md:flex items-center space-x-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-brand-base hover:text-brand-accent transition-colors duration-200 font-medium"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
