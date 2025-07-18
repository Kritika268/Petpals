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
    </div>
  );
};
export default VisionMission;
