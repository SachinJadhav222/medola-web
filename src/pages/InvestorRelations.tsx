import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";

const InvestorRelations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investor{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Relations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover investment opportunities and stay informed about our
              financial performance and growth strategy
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">125%</h3>
                <p className="text-gray-600">Revenue Growth</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <DollarSign className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$50M</h3>
                <p className="text-gray-600">Annual Revenue</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2M+</h3>
                <p className="text-gray-600">Active Users</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <BarChart3 className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">45%</h3>
                <p className="text-gray-600">Market Share</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our financial reports, investor presentations,
              and key announcements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Financial Reports
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Q4 2024 Earnings Report</li>
                  <li>• Annual Report 2024</li>
                  <li>• Q3 2024 Financial Statement</li>
                  <li>• Investor Presentation Q4 2024</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Investor Resources
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• SEC Filings</li>
                  <li>• Corporate Governance</li>
                  <li>• Stock Information</li>
                  <li>• Dividend History</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Investor Relations */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Investor Contact
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            For investor inquiries and additional information
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> investors@medola.co.in
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +917066547411
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> Medola Investor Relations,406-407 Nisham Urbania, Mahatma Nagar Nashik -422005
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorRelations;
