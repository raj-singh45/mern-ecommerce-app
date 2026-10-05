import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            About MyStore
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            Welcome to MyStore, a simple and user-friendly e-commerce
            platform designed to make online shopping easy and convenient.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Our goal is to provide a clean shopping experience where users
            can explore products and find what they need without unnecessary
            complexity.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-5">
              <h2 className="font-semibold text-gray-900">
                Quality Products
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Products presented with clear information and details.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <h2 className="font-semibold text-gray-900">
                Easy Shopping
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                A simple and intuitive experience for browsing products.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-5">
              <h2 className="font-semibold text-gray-900">
                User Friendly
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Designed with simplicity and ease of use in mind.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              We aim to build a reliable and straightforward e-commerce
              experience that focuses on simplicity, usability, and a
              smooth customer journey.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;

