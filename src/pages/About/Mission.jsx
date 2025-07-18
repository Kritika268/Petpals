import { section } from "framer-motion/client";
import React from "react";

const Mission = () => {
  return (
    <section className="bg-gray-100 py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          We aim to redefine innovation by creating solutions that solve
          real-world problems using technology and empathy. Our commitment lies
          in making tech accessible, impactful, and future-ready for communities
          across the globe.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become a global force in tech innovation where every solution is
            rooted in purpose and driven by passion.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Goals</h3>
          <p className="text-gray-700 leading-relaxed">
            Foster a collaborative environment that supports learning,
            creativity, and community-driven development.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Mission;
