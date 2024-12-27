import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl font-bold text-medical-600">NINVA Tech</span>
    </Link>
  );
};

export default Logo;