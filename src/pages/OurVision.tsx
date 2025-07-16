import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Globe, Users } from "lucide-react";

const OurVision = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Shaping the future of digital innovation through transformative
              technology and human-centered design
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Transforming Tomorrow, Today
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At Medola, we envision a world where technology seamlessly
            integrates with human potential, creating unprecedented
            opportunities for growth, creativity, and connection. Our vision
            extends beyond mere innovation – we're building the foundation for a
            more connected, efficient, and empowered digital future.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that the most powerful technologies are those that
            amplify human capabilities rather than replace them. Through our
            platform, we're not just solving today's challenges – we're
            anticipating tomorrow's possibilities.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four fundamental principles that guide our journey toward a
              transformative future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Purpose-Driven Innovation
                </h3>
                <p className="text-gray-600">
                  Every innovation we create serves a meaningful purpose –
                  solving real problems, enhancing lives, and creating positive
                  impact across communities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-16 w-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Intelligent Simplicity
                </h3>
                <p className="text-gray-600">
                  We believe the most sophisticated solutions should feel
                  effortless. Our vision is to make complex technology
                  accessible, intuitive, and delightfully simple for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Globe className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Impact
                </h3>
                <p className="text-gray-600">
                  Our vision extends beyond borders. We're building solutions
                  that create positive change globally, fostering inclusion,
                  sustainability, and shared prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-indigo-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Human-Centered Future
                </h3>
                <p className="text-gray-600">
                  Technology should enhance human potential, not replace it. We
                  envision a future where AI and human intelligence work
                  together to achieve extraordinary outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2030 Vision Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ambitious roadmap for the next decade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  100M
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Users
              </h3>
              <p className="text-gray-600">
                Empowering 100 million users worldwide with our innovative
                platform and solutions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  50+
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Countries
              </h3>
              <p className="text-gray-600">
                Establishing presence in 50+ countries, making our technology
                globally accessible
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Zero
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Carbon Footprint
              </h3>
              <p className="text-gray-600">
                Achieving carbon neutrality through sustainable technology and
                green innovations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Our vision becomes reality through the collective effort of
            dreamers, builders, and innovators. Be part of the transformation.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurVision;
