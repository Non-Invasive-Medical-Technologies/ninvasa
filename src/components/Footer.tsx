import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/1070924e-f453-4130-a2af-9f61b910e9b9.png" 
                alt="Ninvasa Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600">
              Leading innovation in non-invasive diagnostic technologies
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/anesa" className="text-sm text-gray-600 hover:text-medical-600">
                  ANESA
                </Link>
              </li>
              <li>
                <Link to="/kolibri" className="text-sm text-gray-600 hover:text-medical-600">
                  KOLIBRI
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-medical-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/team" className="text-sm text-gray-600 hover:text-medical-600">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/biopromin" className="text-sm text-gray-600 hover:text-medical-600">
                  BioPromin
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Business</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/investment" className="text-sm text-gray-600 hover:text-medical-600">
                  Investment
                </Link>
              </li>
              <li>
                <Link to="/business/onepager" className="text-sm text-gray-600 hover:text-medical-600">
                  One Pager Summary
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="text-sm text-gray-600 hover:text-medical-600">
                  Strategy
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-sm text-gray-600 hover:text-medical-600">
                  Business Plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Ninvasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;