import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Royal Realty",
    description: "Residential and commercial real estate services with personalized support from start to finish.",
  },
  {
    title: "Royal Capital",
    description: "Mortgage loans and refinancing led by our in-house financing expert to get you the best rates.",
  },
  {
    title: "Royal Holdings",
    description: "Strategic real estate investments, future REIT development, and rental property acquisitions.",
  },
  {
    title: "Royal Property Management",
    description: "Professional management of both our own properties and those of third-party clients.",
  },
  {
    title: "Royal Design & Staging",
    description: "Home staging and design services to elevate spaces and maximize property appeal.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e6ede5] text-[#2d3b2d] px-6 py-10 font-sans">
      <header className="max-w-5xl mx-auto mb-10 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Royal Ventures & Co.
        </motion.h1>
        <nav className="space-x-4">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        <section id="about">
          <p className="text-center text-lg">
            Real Estate | Mortgage | Investments | Property Management | Staging
          </p>
        </section>

        <section id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map(({ title, description }, index) => (
            <div key={index} className="rounded-2xl shadow-md bg-white p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </section>

        <section id="contact" className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <p>Interested in working with us? Reach out and let's talk!</p>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="max-w-md mx-auto space-y-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#2d3b2d] text-white rounded-2xl"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
