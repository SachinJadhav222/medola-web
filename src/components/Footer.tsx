import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="./medola-logo.png"
                alt="Medola Logo"
                className="h-8 w-8 rounded-md"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                medola
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming the way you experience digital solutions with
              innovative technology and elegant design.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">info@medola.co.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-vision"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block w-full bg-black rounded-lg p-3 hover:bg-gray-800 transition-colors"
              >
                <div className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]">
                  {/* <span className="text-black font-bold">A</span> */}
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                    alt="App Store"
                    className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[54px]"
                  />
                </div>
                {/* <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                    <span className="text-black font-bold text-xs">A</span>
                    <img
                      src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                      alt="App Store"
                      // className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </div> */}
              </a>
              <a
                href="#"
                className="block w-full bg-black rounded-lg p-3 hover:bg-gray-800 transition-colors"
              >
                <div className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[54px]">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                    alt="Google Play Logo"
                    className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[54px]"
                  />
                </div>
                {/* <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                    <span className="text-black font-bold text-xs">G</span>
                    <img
                      src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                      alt="Google Play Logo"
                      // className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-300">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </div> */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Medola. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/terms"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
