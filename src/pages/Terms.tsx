import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Medola Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">Last updated: June 16, 2025</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using Medola's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Medola's website for personal, non-commercial transitory viewing only.
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="text-gray-700 mb-4">
                  The materials on Medola's website are provided on an 'as is' basis. Medola makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall Medola or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Medola's website, even if Medola or a Medola authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms & Conditions, please contact us at 

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

export default Terms;
