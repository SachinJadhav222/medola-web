import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Shield, Zap, Users, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                //src="./medola-logo.png"
                src="./logoanimation.gif"
                alt="Medola Logo"
                //className="h-24 w-24 mx-auto rounded-2xl shadow-lg"
                className="h-32 w-32 mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                medola
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the future of digital innovation with our cutting-edge
              health tech platform designed for all types users
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Medola?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the features that makes the perfect choice
              for all your health related needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
                <p className="text-gray-600">
                  Experience blazing-fast performance with our optimized
                  platform built for speed and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is encrypted and protected with enterprise-grade security and
                  privacy measures you can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">User-Friendly</h3>
                <p className="text-gray-600">
                  Intuitive design and seamless user experience that anyone can
                  master in minutes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download Medola Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their health
            experience with Medola
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              // className="bg-black hover:bg-gray-900 text-white rounded-lg p-4 transition-colors inline-flex items-center space-x-3"
            >
              <div /*className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"*/
              >
                {/* <span className="text-black font-bold">A</span> */}
                {/* <img
                  src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                  alt="App Store"
                  className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"
                /> */}
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-14"
                />
              </div>
              {/* <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold">A</span>
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
                  alt="App Store"
                  className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"
                />
              </div> */}
              {/* <div className="text-left">
                <p className="text-xs text-gray-300">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div> */}
            </a>

            {/* <a
              href="#"
              className="bg-black hover:bg-gray-900 text-white rounded-lg p-4 transition-colors inline-flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-black font-bold">G</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-300">Get it on</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </a> */}

            <a
              href="#"
              // className="bg-black hover:bg-gray-900 text-white rounded-lg p-4 transition-colors inline-flex items-center space-x-3"
            >
              <div /*className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"*/>
                {/* <img
                  src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                  alt="Google Play Logo"
                  className="h-12 object-contain md:h-[48px] xl:h-[56px] 2xl:h-[64px]"
                /> */}
                <img
                  //src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </div>
              {/* <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
                  alt="Google Play Logo"
                  // className="h-6 w-6 object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-300">Get it on</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div> */}
            </a>
          </div>
        </div>
      </section>
      

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-gray-600 flex items-center justify-center">
                <Star
                  className="w-4 h-4 text-yellow-400 mr-1"
                  fill="currentColor"
                />
                App Rating
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
