import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationProps } from "./types";

const MobileNav = ({ isOpen, menuGroups, mainLinks, aboutLinks, isActive, onLinkClick }: NavigationProps) => {
  if (!isOpen) return null;

  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {mainLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={handleClick}
            className={cn(
              "block px-3 py-2 rounded-md text-base font-medium",
              isActive(link.href)
                ? "bg-medical-100 text-medical-600"
                : "text-gray-700 hover:bg-medical-50"
            )}
          >
            {link.label}
          </Link>
        ))}
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
            About
          </div>
          {aboutLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {Object.entries(menuGroups).map(([category, items]) => (
          <div key={category} className="space-y-1">
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase">
              {category}
            </div>
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={handleClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;