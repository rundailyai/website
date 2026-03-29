"use client";

import { useState, FormEvent } from "react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const faqs = [
    {
      question: "How do I access my purchased products?",
      answer:
        "After purchase, you'll receive an instant download link via email. You can also access your purchases from your account dashboard.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "Can I customize the templates?",
      answer:
        "Absolutely! All our templates are fully customizable. You can modify colors, content, structure, and any other elements to fit your needs.",
    },
    {
      question: "Do I need any special software?",
      answer:
        "Most of our products work with popular platforms like Notion, Google Sheets, or standard email clients. Specific requirements are listed on each product page.",
    },
    {
      question: "Do you offer bulk or team licenses?",
      answer:
        "Yes! Contact us for team pricing and volume discounts. We offer special rates for teams of 5 or more.",
    },
    {
      question: "How often are products updated?",
      answer:
        "We regularly update our products to add new features and improvements. All updates are free for existing customers.",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Support</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          We&apos;re here to help! Find answers or get in touch.
        </p>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 group cursor-pointer"
              >
                <summary className="font-semibold text-lg flex items-center justify-between">
                  {faq.question}
                  <span className="ml-4 text-blue-600 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Send us a message and we&apos;ll get back to you within
            24 hours.
          </p>

          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-600 font-semibold text-lg mb-2">✓ Message Sent!</p>
              <p className="text-gray-600">
                Thank you for reaching out. We&apos;ll respond to your inquiry soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
