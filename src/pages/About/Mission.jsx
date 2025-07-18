import {
  FaHeart,
  FaShieldAlt,
  FaStar,
  FaPaw,
  FaStethoscope,
  FaLeaf,
} from "react-icons/fa";
import React from "react";

const VisionMission = () => {
  return (
    <div className="big-zinc-50 min-h-screen">
      {/* Intro Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLeaf className="text-3xl text-emerald-600" />
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Our Purpose
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DCC Pets, we go beyond treatment — we believe in nurturing
              relationships between people and their pets through heartfelt
              veterinary care.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action – moved upward to engage faster */}
      <section className="py-12 px-4">
        <div className="bg-white max-w-5xl mx-auto p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Feel the Difference
          </h3>
          <p className="text-gray-600 mb-6">
            {" "}
            Become part of a community that trusts DCC for transparency,
            dedication, and top-tier animal care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-md font-medium">
              Schedule a Visit
            </button>
            <button className="border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white text-emerald-600 px-6 py-3 rounded-xl font-medium">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default VisionMission;
