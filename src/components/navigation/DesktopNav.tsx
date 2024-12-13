import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { NavigationProps } from "./types";

const DesktopNav = ({ menuGroups, mainLinks, isActive }: NavigationProps) => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-4 ml-8">
      {mainLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            "nav-link px-3 py-2 text-sm font-medium",
            isActive(link.href) && "text-medical-600"
          )}
        >
          {link.label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="nav-link">
            About <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem>
            <Link to="/about" className="w-full">About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/about/biopromin" className="w-full">BioPromin</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {Object.entries(menuGroups).map(([category, items]) => (
        <DropdownMenu key={category}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="nav-link">
              {category.charAt(0).toUpperCase() + category.slice(1)} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            {items.map((item) => (
              <DropdownMenuItem key={item.href}>
                <Link to={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
};

export default DesktopNav;