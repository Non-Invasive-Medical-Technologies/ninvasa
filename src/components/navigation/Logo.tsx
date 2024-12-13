import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/e1b778eb-99d8-41a2-86bf-121d96fa56ce.png" 
        alt="BL+ Medica Logo" 
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default Logo;