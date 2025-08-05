import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Medola Cookie Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: June 16, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What Are Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit our website. They are widely
                  used to make websites work, or work more efficiently, as well
                  as to provide information to the owners of the site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  Medola uses cookies for several purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are
                    necessary for the website to function properly
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> These help us understand
                    how visitors interact with our website
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> These remember your
                    preferences and settings
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> These are used to
                    deliver relevant advertisements
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Session Cookies
                    </h3>
                    <p className="text-gray-700">
                      These are temporary cookies that expire when you close
                      your browser.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Persistent Cookies
                    </h3>
                    <p className="text-gray-700">
                      These remain on your device for a set period or until you
                      delete them.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Third-Party Cookies
                    </h3>
                    <p className="text-gray-700">
                      These are set by third-party services we use, such as
                      analytics providers.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Managing Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  You can control and manage cookies in various ways. Please
                  note that removing or blocking cookies can impact your user
                  experience and parts of our website may no longer be fully
                  accessible.
                </p>
                <p className="text-gray-700 mb-4">
                  Most browsers automatically accept cookies, but you can modify
                  your browser settings to decline cookies if you prefer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our Cookie Policy, please
                  contact us 
                
                  Greenmetrix i-Tech Private Limited 
                  Email: greenmetrixitech@gmail.com 
                  Phone: 7066547411 
                  Address: 406-407 Nisham Urbania, Mahatma Nagar Nashik -422005
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
