import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/1070924e-f453-4130-a2af-9f61b910e9b9.png" 
        alt="Ninvasa Logo" 
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default Logo;