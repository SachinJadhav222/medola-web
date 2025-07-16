import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      date: "December 15, 2024",
      title: "Medola Launches Revolutionary AI-Powered Features",
      excerpt:
        "Our latest update introduces cutting-edge artificial intelligence capabilities that transform user experience and productivity.",
      category: "Product Update",
    },
    {
      date: "December 10, 2024",
      title: "Partnership Announcement with Leading Tech Giants",
      excerpt:
        "Medola announces strategic partnerships that will expand our reach and enhance our platform capabilities.",
      category: "Partnership",
    },
    {
      date: "December 5, 2024",
      title: "Medola Expands to European Markets",
      excerpt:
        "We're excited to announce our expansion into key European markets, bringing our innovative solutions to millions of new users.",
      category: "Expansion",
    },
    {
      date: "November 28, 2024",
      title: "Q4 Financial Results Show Record Growth",
      excerpt:
        "Medola reports strongest quarterly performance with 125% revenue growth and 2M+ active users milestone.",
      category: "Financial",
    },
    {
      date: "November 20, 2024",
      title: "Award Recognition for Innovation Excellence",
      excerpt:
        "Medola receives prestigious Tech Innovation Award 2024 for outstanding contribution to digital transformation.",
      category: "Recognition",
    },
    {
      date: "November 15, 2024",
      title: "New Mobile App Version 3.0 Released",
      excerpt:
        "Enhanced user interface, improved performance, and new collaboration features now available on iOS and Android.",
      category: "Product Update",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                News
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest announcements, product updates, and
              company milestones
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-600 font-medium">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                  <div className="mt-4">
                    <span className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Read more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter and never miss important updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
