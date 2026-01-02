// NavItem.tsx
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  to: string;
  label: string;
  hasLeftBorder?: boolean;
  hasRightBorder?: boolean;
  mobile?: boolean;
  onClick?: () => void;
}

export default function NavItem({
  to,
  label,
  hasLeftBorder,
  hasRightBorder,
  mobile,
  onClick,
}: Props) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li
      className={`
        relative
        ${!mobile ? "py-4 px-8" : "px-8 py-5"}
        ${hasLeftBorder ? "border-s border-[#90A1B9]" : ""}
        ${hasRightBorder ? "border-e border-[#90A1B9]" : ""}
        text-[#90A1B9]
        transition-colors
      `}
    >
      {/* Animated border */}
      <span
        className={`
          absolute bottom-0 left-0 h-1 bg-[#FFB86A] 
          transition-all duration-300 ease-in-out
          ${isActive ? "w-full" : "w-0"}
        `}
      />

      <NavLink to={to} onClick={onClick} className="relative z-10 block w-full">
        {label}
      </NavLink>
    </li>
  );
}
