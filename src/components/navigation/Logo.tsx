import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-medical-600">Ninvasa</span>
    </Link>
  );
};

export default Logo;