import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuGroups = {
    portfolio: [
      { href: "/anesa", label: "ANESA" },
      { href: "/kolibri", label: "KOLIBRI" },
    ],
    technology: [
      { href: "/parameters", label: "Test Parameters" },
    ],
    business: [
      { href: "/investment", label: "Investment" },
      { href: "/strategy", label: "Strategy" },
      { href: "/download", label: "Business Plan" },
    ],
  };

  const mainLinks = [
    { href: "/", label: "Home" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Globe className="h-8 w-8 text-medical-600 mr-2" />
              <span className="text-xl font-semibold text-medical-800">
                BL<span className="text-medical-600">+</span>MME
              </span>
            </Link>

            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden ml-2"
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Desktop Navigation */}
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

              {/* About Dropdown */}
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

              {/* Portfolio Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="nav-link">
                    Portfolio <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  {menuGroups.portfolio.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <Link to={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Technology Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="nav-link">
                    Technology <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  {menuGroups.technology.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <Link to={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Business Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="nav-link">
                    Business <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  {menuGroups.business.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <Link to={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
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
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-50"
                >
                  About Us
                </Link>
                <Link
                  to="/about/biopromin"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-50"
                >
                  BioPromin
                </Link>
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
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-medical-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;