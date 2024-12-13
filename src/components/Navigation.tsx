import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";
import { MenuGroups, MenuItem } from "./navigation/types";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuGroups: MenuGroups = {
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

  const mainLinks: MenuItem[] = [
    { href: "/", label: "Home" },
  ];

  const aboutLinks: MenuItem[] = [
    { href: "/about", label: "About Us" },
    { href: "/about/team", label: "Our Team" },
    { href: "/about/biopromin", label: "BioPromin" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleCloseMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden ml-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <DesktopNav 
              menuGroups={menuGroups} 
              mainLinks={mainLinks}
              aboutLinks={aboutLinks}
              isActive={isActive} 
            />
          </div>
        </div>
        <MobileNav 
          isOpen={isOpen}
          menuGroups={menuGroups}
          mainLinks={mainLinks}
          aboutLinks={aboutLinks}
          isActive={isActive}
          onLinkClick={handleCloseMobileMenu}
        />
      </div>
    </nav>
  );
};

export default Navigation;