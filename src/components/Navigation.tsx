import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { 
      href: "/portfolio", 
      label: "Portfolio",
    },
    { 
      href: "/anesa", 
      label: "ANESA",
      parent: "/portfolio"
    },
    { 
      href: "/kolibri", 
      label: "KOLIBRI",
      parent: "/portfolio"
    },
    { href: "/technology", label: "Technology" },
    { 
      href: "/parameters", 
      label: "Test Parameters",
      parent: "/technology"
    },
    { href: "/business", label: "Business Overview" },
    { 
      href: "/investment", 
      label: "Investment",
      parent: "/business"
    },
    { 
      href: "/strategy", 
      label: "Strategy",
      parent: "/business"
    },
    { 
      href: "/download", 
      label: "Business Plan",
      parent: "/business"
    },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu />
          </Button>
          <ul className={`flex space-x-4 ${isOpen ? "block" : "hidden"} md:flex`}>
            {links.map(link => (
              <li key={link.href}>
                <Link to={link.href} className={cn("text-gray-700", isActive(link.href) && "font-bold")}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
