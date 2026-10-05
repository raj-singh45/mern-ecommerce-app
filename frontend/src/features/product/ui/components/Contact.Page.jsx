
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-600">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                support@example.com
              </p>

              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                +91 98765 43210
              </p>

              <p>
                <span className="font-medium text-gray-900">Address:</span>{" "}
                Jabalpur, Madhya Pradesh, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
