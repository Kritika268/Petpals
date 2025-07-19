"use client";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaStethoscope,
  FaHeart,
  FaPaw,
  FaUserMd,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Veterinarian",
      specialization: "Small Animal Medicine",
      experience: "15+ years",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Sarah+Johnson",
      quote: "Every pet deserves a lifetime of love and exceptional care.",
      rating: 4.9,
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Senior Veterinarian",
      specialization: "Exotic Animal Care",
      experience: "12+ years",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Michael+Chen",
      quote: "Healing hearts, one paw at a time.",
      rating: 4.8,
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Veterinary Surgeon",
      specialization: "Orthopedic Surgery",
      experience: "10+ years",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Emily+Rodriguez",
      quote: "Compassion is the best medicine we can offer.",
      rating: 4.9,
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Lisa Thompson",
      role: "Head Veterinary Technician",
      specialization: "Critical Care",
      experience: "8+ years",
      image: "/placeholder.svg?height=400&width=400&text=Lisa+Thompson",
      quote: "Creating a welcoming home for pets and their families.",
      rating: 4.7,
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ea] overflow-hidden">
      {/*Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#b98a32] rounded-full animate-float-smooth opacity-25"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-[#821b1f] rounded-full animate-float-delayed opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-5 h-5 bg-[#b98a32] rounded-full animate-float-reverse opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-12 w-2 h-2 bg-[#821b1f] rounded-full animate-pulse-smooth opacity-35"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-6 h-6 bg-[#b98a32] rounded-full animate-bounce-smooth opacity-25"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/5 w-3 h-3 bg-[#821b1f] rounded-full animate-float-smooth opacity-20"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#821b1f] via-[#9d2429] to-[#b98a32] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-48 h-48 bg-white opacity-4 rounded-full animate-pulse-ultra-smooth"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white opacity-3 rounded-full animate-float-ultra-gentle"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-2 rounded-full animate-spin-ultra-smooth"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-[#b98a32] opacity-6 rounded-full animate-bounce-ultra-gentle"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-white opacity-5 rounded-full animate-pulse-gentle-smooth"></div>
          <div className="absolute top-1/4 right-1/5 w-20 h-20 bg-[#b98a32] opacity-8 rounded-full animate-float-smooth"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`inline-flex items-center justify-center w-28 h-28 bg-white bg-opacity-20 rounded-full mb-10 backdrop-blur-sm shadow-3xl transition-all duration-1200 ease-out ${
                isVisible ? "animate-scale-bounce-smooth" : "scale-0 opacity-0"
              }`}
            >
              <FaUserMd className="text-5xl text-white animate-pulse-gentle-smooth" />
            </div>

            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-tight transition-all duration-1200 ease-out delay-200 ${
                isVisible
                  ? "animate-slide-up-smooth opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              Meet Our{" "}
              <span className="text-[#b98a32] animate-glow-ultra-smooth">
                Team
              </span>
            </h1>

            <p
              className={`text-2xl md:text-4xl font-light leading-relaxed max-w-5xl mx-auto opacity-95 transition-all duration-1200 ease-out delay-400 ${
                isVisible
                  ? "animate-fade-up-smooth opacity-95"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Guided by{" "}
              <span className="text-[#b98a32] font-medium">compassion</span>.
              Driven by <span className="text-[#b98a32] font-medium">care</span>
              .
            </p>

            <div
              className={`mt-16 h-2 bg-[#b98a32] mx-auto rounded-full transition-all duration-1500 ease-out delay-600 ${
                isVisible ? "animate-expand-width-smooth w-40" : "w-0"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/*Team Members Section */}
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* Section Introduction */}
          <div
            className={`text-center mb-24 transition-all duration-1000 ease-out ${
              isVisible
                ? "animate-fade-up-smooth opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-[#821b1f] mb-8">
              Dedicated{" "}
              <span className="text-[#b98a32] animate-glow-subtle">
                Professionals
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our team combines years of experience with genuine passion for
              animal welfare, ensuring your beloved pets receive the highest
              standard of care with compassion and expertise.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out transform hover:-translate-y-6 hover:scale-105 border-t-8 border-[#b98a32] overflow-hidden relative ${
                  isVisible
                    ? "animate-fade-up-smooth opacity-100"
                    : "translate-y-16 opacity-0"
                }`}
                style={{
                  animationDelay: `${1000 + index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
               
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#b98a32] rounded-full animate-ping-smooth opacity-30"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#821b1f] rounded-full animate-pulse-smooth opacity-40"></div>
                <div className="absolute top-4 left-4 w-6 h-6 bg-[#b98a32] rounded-full animate-bounce-smooth opacity-25"></div>

                {/*Profile Image Section */}
                <div className="relative p-10 pb-6">
                  <div className="relative mx-auto w-40 h-40 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#821b1f] to-[#b98a32] rounded-full animate-spin-smooth opacity-20"></div>
                    <div className="absolute inset-2 bg-gradient-to-tr from-[#b98a32] to-[#821b1f] rounded-full animate-spin-reverse-smooth opacity-15"></div>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Enhanced Floating Icons */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#b98a32] rounded-full flex items-center justify-center shadow-xl group-hover:animate-bounce-smooth transition-all duration-500">
                      <FaStethoscope className="text-white text-lg animate-wiggle-smooth" />
                    </div>
                    <div
                      className="absolute -bottom-3 -left-3 w-12 h-12 bg-[#821b1f] rounded-full flex items-center justify-center shadow-xl group-hover:animate-bounce-smooth transition-all duration-500"
                      style={{ animationDelay: "200ms" }}
                    >
                      <FaHeart className="text-white text-lg animate-heartbeat-smooth" />
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute -top-3 -left-3 bg-white rounded-full px-3 py-2 shadow-xl border-2 border-[#b98a32]">
                      <div className="flex items-center space-x-1">
                        <FaStar className="text-[#b98a32] text-sm animate-twinkle" />
                        <span className="text-[#821b1f] font-bold text-sm">
                          {member.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-10 pb-10">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-black text-[#821b1f] mb-2 group-hover:text-[#b98a32] transition-colors duration-500 ease-out">
                      {member.name}
                    </h3>

                    <p className="text-[#b98a32] font-bold text-xl mb-2">
                      {member.role}
                    </p>

                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span className="bg-[#f7f3ea] px-3 py-1 rounded-full border border-[#821b1f] font-semibold">
                        {member.specialization}
                      </span>
                      <span className="bg-[#821b1f] text-white px-3 py-1 rounded-full font-semibold">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  <div className="relative mb-8">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-[#b98a32] text-2xl opacity-30" />
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed text-center border-l-4 border-[#b98a32] pl-6 ml-4">
                      "{member.quote}"
                    </blockquote>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.github}
                      className="w-14 h-14 bg-[#f7f3ea] border-3 border-[#821b1f] rounded-full flex items-center justify-center text-[#821b1f] hover:bg-[#821b1f] hover:text-white transition-all duration-500 ease-out transform hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-2xl group/icon"
                    >
                      <FaGithub className="text-xl group-hover/icon:animate-bounce-smooth" />
                    </a>

                    <a
                      href={member.social.linkedin}
                      className="w-14 h-14 bg-[#f7f3ea] border-3 border-[#b98a32] rounded-full flex items-center justify-center text-[#b98a32] hover:bg-[#b98a32] hover:text-white transition-all duration-500 ease-out transform hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-2xl group/icon"
                    >
                      <FaLinkedin className="text-xl group-hover/icon:animate-bounce-smooth" />
                    </a>

                    <a
                      href={member.social.instagram}
                      className="w-14 h-14 bg-[#f7f3ea] border-3 border-[#821b1f] rounded-full flex items-center justify-center text-[#821b1f] hover:bg-[#821b1f] hover:text-white transition-all duration-500 ease-out transform hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-2xl group/icon"
                    >
                      <FaInstagram className="text-xl group-hover/icon:animate-bounce-smooth" />
                    </a>
                  </div>
                </div>

                
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#821b1f]/8 to-transparent transition-opacity duration-700 ease-out pointer-events-none ${
                    hoveredCard === member.id ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`mt-24 text-center transition-all duration-1000 ease-out delay-1200 ${
              isVisible
                ? "animate-fade-up-smooth opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-[#821b1f] via-[#9d2429] to-[#b98a32] rounded-3xl p-16 lg:p-20 text-white relative overflow-hidden shadow-3xl">
              
              <div className="absolute inset-0 opacity-8">
                <div className="absolute top-0 right-0 w-56 h-56 bg-white rounded-full transform translate-x-28 -translate-y-28 animate-float-ultra-gentle"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24 animate-float-reverse-smooth"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white opacity-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-ultra-smooth"></div>
                <div className="absolute top-20 left-20 w-20 h-20 bg-[#b98a32] opacity-15 rounded-full animate-bounce-ultra-gentle"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-10 rounded-full animate-float-delayed-smooth"></div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-10 backdrop-blur-sm shadow-3xl animate-bounce-ultra-gentle">
                  <FaPaw className="text-4xl animate-wiggle-ultra-smooth" />
                </div>

                <h3 className="text-5xl lg:text-6xl font-black mb-8 animate-glow-subtle">
                  Ready to Meet Our Team?
                </h3>

                <p className="text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed">
                  Schedule a consultation with our expert veterinarians and
                  experience the difference that compassionate, professional
                  care can make for your beloved pets.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button className="bg-white text-[#821b1f] px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-[#f7f3ea] transition-all duration-700 ease-out transform hover:scale-110 hover:-translate-y-3 shadow-3xl hover:shadow-4xl group/btn">
                    <span className="group-hover/btn:animate-pulse-smooth">
                      Book Consultation
                    </span>
                  </button>

                  <button className="border-4 border-white text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white hover:text-[#821b1f] transition-all duration-700 ease-out transform hover:scale-110 hover:-translate-y-3 shadow-3xl hover:shadow-4xl group/btn">
                    <span className="group-hover/btn:animate-pulse-smooth">
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <style jsx>{`
        @keyframes float-smooth {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(3px);
          }
          50% {
            transform: translateY(-4px) translateX(-2px);
          }
          75% {
            transform: translateY(-12px) translateX(1px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-6px) translateX(-3px);
          }
          66% {
            transform: translateY(-10px) translateX(4px);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(8px) translateX(-2px);
          }
        }

        @keyframes pulse-smooth {
          0%,
          100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }

        @keyframes bounce-smooth {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes pulse-ultra-smooth {
          0%,
          100% {
            opacity: 0.04;
            transform: scale(1);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.01);
          }
        }

        @keyframes float-ultra-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes spin-ultra-smooth {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes bounce-ultra-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes pulse-gentle-smooth {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes scale-bounce-smooth {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-up-smooth {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glow-ultra-smooth {
          0%,
          100% {
            text-shadow: 0 0 15px rgba(185, 138, 50, 0.3);
          }
          50% {
            text-shadow: 0 0 25px rgba(185, 138, 50, 0.6);
          }
        }

        @keyframes fade-up-smooth {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand-width-smooth {
          0% {
            width: 0;
          }
          100% {
            width: 10rem;
          }
        }

        @keyframes glow-subtle {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(185, 138, 50, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(185, 138, 50, 0.4);
          }
        }

        @keyframes ping-smooth {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes spin-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-smooth {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes wiggle-smooth {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(2deg);
          }
          75% {
            transform: rotate(-2deg);
          }
        }

        @keyframes heartbeat-smooth {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.02);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes bounce-smooth {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes wiggle-ultra-smooth {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes float-reverse-smooth {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(6px);
          }
        }

        @keyframes float-delayed-smooth {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-4px) translateX(-2px);
          }
          66% {
            transform: translateY(-8px) translateX(3px);
          }
        }

        @keyframes pulse-smooth {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Animation Classes */
        .animate-float-smooth {
          animation: float-smooth 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 3.5s ease-in-out infinite;
        }
        .animate-pulse-smooth {
          animation: pulse-smooth 3s ease-in-out infinite;
        }
        .animate-bounce-smooth {
          animation: bounce-smooth 2s ease-in-out infinite;
        }
        .animate-pulse-ultra-smooth {
          animation: pulse-ultra-smooth 5s ease-in-out infinite;
        }
        .animate-float-ultra-gentle {
          animation: float-ultra-gentle 7s ease-in-out infinite;
        }
        .animate-spin-ultra-smooth {
          animation: spin-ultra-smooth 40s linear infinite;
        }
        .animate-bounce-ultra-gentle {
          animation: bounce-ultra-gentle 3s ease-in-out infinite;
        }
        .animate-pulse-gentle-smooth {
          animation: pulse-gentle-smooth 2.5s ease-in-out infinite;
        }
        .animate-scale-bounce-smooth {
          animation: scale-bounce-smooth 1.2s ease-out;
        }
        .animate-slide-up-smooth {
          animation: slide-up-smooth 1.2s ease-out;
        }
        .animate-glow-ultra-smooth {
          animation: glow-ultra-smooth 4s ease-in-out infinite;
        }
        .animate-fade-up-smooth {
          animation: fade-up-smooth 1s ease-out;
        }
        .animate-expand-width-smooth {
          animation: expand-width-smooth 2.5s ease-out;
        }
        .animate-glow-subtle {
          animation: glow-subtle 3s ease-in-out infinite;
        }
        .animate-ping-smooth {
          animation: ping-smooth 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-spin-smooth {
          animation: spin-smooth 10s linear infinite;
        }
        .animate-spin-reverse-smooth {
          animation: spin-reverse-smooth 12s linear infinite;
        }
        .animate-wiggle-smooth {
          animation: wiggle-smooth 3s ease-in-out infinite;
        }
        .animate-heartbeat-smooth {
          animation: heartbeat-smooth 2s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-bounce-smooth {
          animation: bounce-smooth 2s ease-in-out infinite;
        }
        .animate-wiggle-ultra-smooth {
          animation: wiggle-ultra-smooth 4s ease-in-out infinite;
        }
        .animate-float-reverse-smooth {
          animation: float-reverse-smooth 4s ease-in-out infinite;
        }
        .animate-float-delayed-smooth {
          animation: float-delayed-smooth 5s ease-in-out infinite;
        }
        .animate-pulse-smooth {
          animation: pulse-smooth 2s ease-in-out infinite;
        }

        /* Enhanced Borders */
        .border-3 {
          border-width: 3px;
        }
        .border-4 {
          border-width: 4px;
        }
        .border-8 {
          border-width: 8px;
        }

        /* Enhanced Shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
        .shadow-4xl {
          box-shadow: 0 45px 80px -15px rgba(0, 0, 0, 0.35);
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
