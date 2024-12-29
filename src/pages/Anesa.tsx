import AnesaPlatform from "../components/AnesaPlatform";
import AnesaTechnology from "../components/anesa/AnesaTechnology";
import { Link } from "react-router-dom";

const Anesa = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-8">ANESA Platform</h1>
          <Link 
            to="/anesa/onepager" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View One Pager
          </Link>
        </div>
        <AnesaTechnology />
        <AnesaPlatform />
      </div>
    </div>
  );
};

export default Anesa;