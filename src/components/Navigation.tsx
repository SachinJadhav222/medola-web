import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="./medola-logo.png"
              alt="Medola Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              medola
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/our-vision"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/our-vision")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              Our Vision
            </Link>
            <Link
              to="/news"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/news")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              News
            </Link>
            <Link
              to="/investor-relations"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/investor-relations")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              Investors
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/our-vision"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/our-vision")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                Our Vision
              </Link>
              <Link
                to="/news"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/news")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                News
              </Link>
              <Link
                to="/investor-relations"
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/investor-relations")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                Investors
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
