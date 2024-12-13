export interface MenuItem {
  href: string;
  label: string;
}

export interface MenuGroups {
  [key: string]: MenuItem[];
}

export interface NavigationProps {
  menuGroups: MenuGroups;
  mainLinks: MenuItem[];
  aboutLinks: MenuItem[];
  isActive: (href: string) => boolean;
  onLinkClick?: () => void;
  isOpen?: boolean;
}