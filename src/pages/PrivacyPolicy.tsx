import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Medola Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: December 16, 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  Greenmetrix i-Tech Private Limited (“Company”, “we”, “our”, or
                  “us”), operating the brand Medola, is committed to
                  safeguarding the privacy of users (“you”, “your”) who access
                  our platform and use our services. This Privacy Policy
                  outlines how we collect, use, store, and disclose your
                  personal information.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    Personal information (name, email address, phone number)
                  </li>
                  <li>Account information (username, password)</li>
                  <li>Usage data (how you interact with our services)</li>
                  <li>
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>
                    Respond to your comments, questions, and customer service
                    requests
                  </li>
                  <li>
                    Communicate with you about products, services, and events
                  </li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Information Sharing
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>
                    With service providers who assist us in operating our
                    website
                  </li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us
                  
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

export default PrivacyPolicy;
