import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold bg-gradient-to-r from-[#26652C] to-[#4EC989] bg-clip-text text-transparent">
        Ninvasa
      </span>
    </Link>
  );
};

export default Logo;