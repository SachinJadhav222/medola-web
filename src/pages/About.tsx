import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Medola
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              "Inspired by history, driven by innovation — Medola brings the
              royal standard of care to the modern world through thoughtful
              design and cutting-edge technology."
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Medola Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In the ancient Greco-Roman era, long before hospitals and health
                systems, there existed a highly esteemed figure in royal courts
                known as the Medola. Far more than just a healer, the Medola was
                a fully qualified doctor — rigorously trained in early forms of
                medicine, philosophy, and the science of the body.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                But unlike ordinary physicians of the time, the Medola was
                chosen to serve royalty because of their rare combination of
                clinical excellence and deep compassion. They were entrusted
                with the complete well-being of rulers — not only curing
                ailments, but nurturing the mind and soul. A Medola was often a
                personal confidant, a silent observer of stress, and a calm
                presence in times of chaos.
              </p>
              <p className="text-lg text-gray-600">
                The name Medola is believed to come from a blend of ancient
                roots — "Med" for medicine, "Do" for to serve, and "La" for
                light — symbolizing the healing light brought to those they
                served.
              </p>
              <p className="text-lg text-gray-600">
                Now, centuries later, Medola has returned in a new form — as an
                app that brings qualified, compassionate medical care directly
                to your home. Just as kings and queens once received personal
                visits from a Medola, today’s Medola ensures that everyone is
                treated with the same dignity, trust, and attention once
                reserved for royalty.
              </p>
            </div>
            <div className="relative">
              <div className="w-400 h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <img
                  src="./medola-logo.png"
                  alt="Medola Logo"
                  className="h-32 w-32 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg">
                  At Medola, our mission is to revive the timeless tradition of
                  personalized care by combining the wisdom of history with the
                  power of modern technology. Inspired by the royal physicians
                  of ancient times — the Medolas — we aim to bring fully
                  qualified, compassionate healthcare directly to people’s
                  homes, treating every individual with the same dignity and
                  attention once reserved for kings and queens. We are committed
                  to revolutionizing digital healthcare through innovative
                  solutions, thoughtful design, and a deep respect for human
                  connection — making high-quality medical care accessible,
                  respectful, and truly personal.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-lg">
                  To become the most trusted name in home-based digital
                  healthcare — where every individual, regardless of status or
                  location, experiences the royal standard of care. We envision
                  a world where technology restores the human touch in medicine,
                  and healthcare feels personal, dignified, and empowering —
                  just as it did when the Medola walked the halls of kings and
                  queens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we
              make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We use technology as a tool to transform healthcare into a
                smarter, more seamless experience. Inspired by the wisdom of the
                past, we are building the future — where care is proactive,
                connected, and always within reach. Embrace modern tools to
                simplify healthcare access Continuously improve with creative,
                adaptive solutions Blend medical science with intelligent
                digital design
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">User-Centric</h3>
              <p className="text-gray-600">
                At Medola, the patient is at the heart of everything we do. Just
                as the Medola of old offered deeply personal care to royalty, we
                strive to provide the same level of attention, dignity, and
                warmth to every user — right at home. Design experiences that
                are intuitive, respectful, and human Make healthcare feel
                personal, not transactional Listen, learn, and adapt to real
                human needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We stand on the pillars of trust, professionalism, and ethics.
                Every decision we make — from medical partnerships to user
                privacy — is grounded in doing what’s right, even when no one is
                watching. Uphold the highest standards of clinical quality and
                transparency Protect user data and privacy with unwavering
                responsibility Build long-term trust with patients and providers
                alike
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600 mb-4">
                We use technology as a tool to transform healthcare into a
                smarter, more seamless experience. Inspired by the wisdom of the
                past, we are building the future — where care is proactive,
                connected, and always within reach.
              </p>
              <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
                <li>Embrace modern tools to simplify healthcare access</li>
                <li>Continuously improve with creative, adaptive solutions</li>
                <li>Blend medical science with intelligent digital design</li>
              </ul>
            </div>

            {/* User-Centric */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">User-Centric</h3>
              <p className="text-gray-600 mb-4">
                At Medola, the patient is at the heart of everything we do. Just
                as the Medola of old offered deeply personal care to royalty, we
                strive to provide the same level of attention, dignity, and
                warmth to every user — right at home.
              </p>
              <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
                <li>
                  Design experiences that are intuitive, respectful, and human
                </li>
                <li>Make healthcare feel personal, not transactional</li>
                <li>Listen, learn, and adapt to real human needs</li>
              </ul>
            </div>

            {/* Integrity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600 mb-4">
                We stand on the pillars of trust, professionalism, and ethics.
                Every decision we make — from medical partnerships to user
                privacy — is grounded in doing what’s right, even when no one is
                watching.
              </p>
              <ul className="text-gray-600 text-left list-disc list-inside space-y-1">
                <li>
                  Uphold the highest standards of clinical quality and
                  transparency
                </li>
                <li>
                  Protect user data and privacy with unwavering responsibility
                </li>
                <li>Build long-term trust with patients and providers alike</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            A diverse group of passionate professionals dedicated to creating
            exceptional digital experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-purple-100">Team Members</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-purple-100">Countries</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-purple-100">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Remote-First</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
