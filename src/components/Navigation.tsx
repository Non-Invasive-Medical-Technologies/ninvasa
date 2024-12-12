import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Product Portfolio" },
    { 
      href: "/anesa", 
      label: "ANESA Platform",
      parent: "/portfolio"
    },
    { 
      href: "/kolibri", 
      label: "KOLIBRI System",
      parent: "/portfolio"
    },
    { href: "/technology", label: "Technology" },
    { href: "/investment", label: "Investment" },
    { href: "/business", label: "Business Overview" },
    { href: "/strategy", label: "Strategy" },
    { href: "/download", label: "Business Plan" },
  ];

  const isActive = (link) => {
    if (link.parent) {
      return location.pathname === link.href || location.pathname === link.parent;
    }
    return location.pathname === link.href;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-gradient-to-r from-medical-100 to-medical-200 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-r from-medical-50 to-medical-100"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-semibold text-medical-800"
          >
            <PlusCircle className="h-6 w-6 text-medical-600" />
            <span className="font-sans tracking-tight">BL+MME</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.filter(link => !link.parent).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "nav-link text-sm",
                  isActive(link)
                    ? "text-medical-600"
                    : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    link.parent ? "pl-6" : "",
                    isActive(link)
                      ? "bg-medical-50 text-medical-600"
                      : "text-gray-700 hover:bg-medical-50 hover:text-medical-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;