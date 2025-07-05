import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const Button = ({ children, href, type, className = "" }) =>
  href ? (
    <a
      href={href}
      className={`inline-block bg-indigo-600 text-white py-2 px-4 rounded-xl shadow hover:bg-indigo-700 transition ${className}`}
    >
      {children}
    </a>
  ) : (
    <button
      type={type || "button"}
      className={`bg-indigo-600 text-white py-2 px-4 rounded-xl shadow hover:bg-indigo-700 transition ${className}`}
    >
      {children}
    </button>
  );
const Input = (props) => (
  <input
    {...props}
    className="border border-gray-300 rounded-xl p-3 w-full"
    />
);
const Textarea = (props) => (
  <textarea
    {...props}
    className="border border-gray-300 rounded-xl p-3 w-full"
    />
);

const services = [
  {
    title: "Individual Therapy",
    description:
      "Personalized one-on-one sessions focused on anxiety, trauma, and mood disorders."
  },
  {
    title: "Couples Counseling",
    description:
      "Evidence-based support to strengthen communication and intimacy in relationships."
  },
  {
    title: "Telehealth Sessions",
    description:
      "Secure video visits so you can access care from anywhere in New Jersey."
  },
  {
    title: "Workshops & Groups",
    description:
      "Psycho-educational groups on mindfulness, distress tolerance, and parenting skills."
  }
];

export default function MentalHealthWebsite() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">HopeBridge Counseling</h1>
          <nav className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#about" className="hover:text-indigo-600">About Us</a>
            <a href="#team" className="hover:text-indigo-600">Team</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <Button href="#contact" className="hidden md:inline-flex">
            Book a Session
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center text-center px-4 py-24 bg-gradient-to-br from-indigo-100 via-white to-teal-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Compassionate Mental Health Care for New Jersey Families
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Evidence-based therapy grounded in empathy, cultural humility, and holistic wellness.
          </p>
          <Button href="#contact" className="px-6 py-3 text-lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-4 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardContent>
                  <h4 className="text-xl font-semibold mb-3">{svc.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{svc.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Why Choose HopeBridge?</h3>
            <p className="mb-4 text-gray-700">
              Founded by licensed professional counselor Oxana Rodriguez, HopeBridge Counseling integrates
              psychodynamic insight with evidence-based CBT and mindfulness-based practices. We specialize in
              anxiety, mood disorders, complex trauma, OCD, and relational concerns.
            </p>
            <p className="text-gray-700">
              Our goal is to provide a warm, inclusive space where every client feels heard, validated, and empowered
              to build a life that aligns with their values.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Therapist talking with a client"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container mx-auto px-4 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h3>
        <p className="text-center text-gray-600 max-w-xl mx-auto">
          Bios coming soon! We are expanding our compassionate team of culturally responsive clinicians to better
          serve you.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Get in Touch</h3>
            <p className="text-gray-700">
              Ready to start your healing journey? Use the form or reach out directly and we'll respond within one
              business day.
            </p>
            <div className="flex items-center space-x-3 text-gray-700">
              <Phone className="w-5 h-5" />
              <a href="tel:+15555555555" className="hover:underline">
                (555) 555-5555
              </a>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@hopebridgecounseling.com" className="hover:underline">
                info@hopebridgecounseling.com
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
          >
            <Input placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Textarea placeholder="How can we help you?" rows={4} required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} HopeBridge Counseling. All rights reserved.
      </footer>
    </div>
  );
}
