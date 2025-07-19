"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaStethoscope,
  FaSyringe,
  FaCut,
  FaVideo,
  FaAppleAlt,
  FaTooth,
  FaAmbulance,
  FaHome,
  FaClock,
  FaUserMd,
  FaBuilding,
  FaHeart,
  FaComments,
  FaMapMarkerAlt,
  FaPaw,
  FaCalendarAlt,
} from "react-icons/fa";

const Service = () => {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef();
  const elementsRef = useRef([]);

  // Services data
  const services = [
    {
      id: 1,
      icon: FaStethoscope,
      title: "General Consultation",
      description:
        "Routine health checks and personalized advice to keep your pet happy and healthy.",
      color: "#b98a32",
    },
    {
      id: 2,
      icon: FaSyringe,
      title: "Vaccinations",
      description:
        "Protect your pet from common diseases with our comprehensive vaccination programs.",
      color: "#821b1f",
    },
    {
      id: 3,
      icon: FaCut,
      title: "Surgery",
      description:
        "State-of-the-art surgical care, from spaying/neutering to advanced procedures.",
      color: "#b98a32",
    },
    {
      id: 4,
      icon: FaCut,
      title: "Grooming & Spa",
      description:
        "Pamper your pet with professional grooming, baths, and spa treatments.",
      color: "#821b1f",
    },
    {
      id: 5,
      icon: FaVideo,
      title: "Telehealth",
      description:
        "Expert veterinary advice from the comfort of your home, via secure video calls.",
      color: "#b98a32",
    },
    {
      id: 6,
      icon: FaAppleAlt,
      title: "Pet Nutrition Counseling",
      description:
        "Tailored diet plans and nutrition advice for pets of all ages and needs.",
      color: "#821b1f",
    },
    {
      id: 7,
      icon: FaTooth,
      title: "Dental Care",
      description:
        "Keep your pet's smile bright with our dental cleaning and oral health services.",
      color: "#b98a32",
    },
    {
      id: 8,
      icon: FaAmbulance,
      title: "Emergency & Critical Care",
      description:
        "24/7 emergency services for urgent medical needs and critical care situations.",
      color: "#821b1f",
    },
    {
      id: 9,
      icon: FaHome,
      title: "Pet Boarding & Daycare",
      description:
        "Safe, comfortable boarding and fun daycare for your pets while you're away.",
      color: "#b98a32",
    },
  ];

  // Features data
  const features = [
    {
      id: 1,
      icon: FaClock,
      title: "24/7 Emergency Care",
      description:
        "Round-the-clock support for your peace of mind, whenever you need us.",
    },
    {
      id: 2,
      icon: FaUserMd,
      title: "Certified & Caring Veterinarians",
      description:
        "Our team combines expertise with genuine compassion for every animal.",
    },
    {
      id: 3,
      icon: FaBuilding,
      title: "Modern Facilities",
      description:
        "Advanced equipment and a welcoming environment for pets and owners alike.",
    },
    {
      id: 4,
      icon: FaHeart,
      title: "Personalized Attention",
      description:
        "We treat every pet as an individual, with care plans tailored to their unique needs.",
    },
    {
      id: 5,
      icon: FaComments,
      title: "Transparent Communication",
      description:
        "Clear, honest updates and advice at every step of your pet's care.",
    },
    {
      id: 6,
      icon: FaMapMarkerAlt,
      title: "Convenient Location",
      description:
        "Easily accessible in Gurugram, with ample parking and a friendly team.",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el;
    }
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap");

        /* Custom Keyframe Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceGentle {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -10px, 0);
          }
          70% {
            transform: translate3d(0, -5px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes pulseGentle {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        @keyframes wiggle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Animation Classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }

        .animate-pulse-gentle {
          animation: pulseGentle 2s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        /* Hover Effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .hover-scale {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 0 25px rgba(185, 138, 50, 0.4);
        }

        /* Button Animations */
        .btn-primary {
          background: #821b1f;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          background: #b98a32;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(185, 138, 50, 0.3);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #821b1f;
          color: #821b1f;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-secondary:hover {
          background: #b98a32;
          border-color: #b98a32;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(185, 138, 50, 0.3);
        }

        /* Card Hover Effects */
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        /* Icon Hover Effects */
        .icon-hover {
          transition: all 0.3s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1) rotate(5deg);
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #821b1f 0%, #b98a32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Background Pattern */
        .bg-pattern {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(185, 138, 50, 0.1) 1px,
            transparent 0
          );
          background-size: 20px 20px;
        }

        /* Glassmorphism Effect */
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Responsive Text */
        .text-responsive-xl {
          font-size: clamp(2rem, 5vw, 4rem);
        }

        .text-responsive-lg {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
        }

        .text-responsive-md {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
        }

        .text-responsive-sm {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
        }

        /* Stagger Animation Delays */
        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
        .stagger-7 {
          animation-delay: 0.7s;
        }
        .stagger-8 {
          animation-delay: 0.8s;
        }
        .stagger-9 {
          animation-delay: 0.9s;
        }
      `}</style>

      <div
        className="min-h-screen bg-pattern font-sans overflow-x-hidden"
        style={{
          backgroundColor: "#f7f3ea",
          fontFamily: "Inter, Lato, sans-serif",
        }}
      >
        {/* Header Section */}
        <header
          ref={(el) => addToRefs(el, 0)}
          data-animate="header"
          className={`text-center py-16 px-4 transition-all duration-1000 ${
            isVisible.header ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FaPaw
                className="text-6xl animate-bounce-gentle hover-scale cursor-pointer mr-4"
                style={{ color: "#b98a32" }}
              />
              <h1 className="text-responsive-xl font-bold gradient-text tracking-tight">
                Our Veterinary Services
              </h1>
            </div>
            <p
              className="text-responsive-md font-medium mb-6"
              style={{ color: "#821b1f" }}
            >
              Comprehensive, compassionate care for every stage of your pet's
              life.
            </p>
            <div className="max-w-4xl mx-auto">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#8b7355" }}
              >
                At Petpals, we believe every pet deserves the best. Our
                experienced team offers a wide range of veterinary services,
                from routine checkups to advanced medical care, all delivered
                with love and expertise. Explore our services below to see how
                we can help your furry family member thrive.
              </p>
            </div>
          </div>
        </header>

        {/* Services Grid Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 1)}
              data-animate="services-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["services-title"]
                  ? "animate-slide-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2
                className="text-responsive-lg font-bold mb-4"
                style={{ color: "#821b1f" }}
              >
                Our Complete Range of Services
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "#8b7355" }}
              >
                From preventive care to specialized treatments, we're here for
                every aspect of your pet's health journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    ref={(el) => addToRefs(el, index + 10)}
                    data-animate={`service-${service.id}`}
                    className={`bg-white rounded-3xl p-8 shadow-lg card-hover hover-glow transition-all duration-1000 ${
                      isVisible[`service-${service.id}`]
                        ? `animate-scale-in stagger-${(index % 3) + 1}`
                        : "opacity-0 scale-90"
                    }`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 icon-hover"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <IconComponent
                          className="text-3xl"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "#821b1f" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <button className="w-full btn-secondary py-3 px-6 rounded-xl font-semibold">
                      Learn More
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="py-16 px-4"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 20)}
              data-animate="why-choose-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["why-choose-title"]
                  ? "animate-fade-in"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2
                className="text-responsive-lg font-bold mb-4"
                style={{ color: "#821b1f" }}
              >
                Why Petpals?
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{ color: "#8b7355" }}
              >
                We're more than just a clinic—we're your partner in your pet's
                lifelong health journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    ref={(el) => addToRefs(el, index + 30)}
                    data-animate={`feature-${feature.id}`}
                    className={`bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-1000 ${
                      isVisible[`feature-${feature.id}`]
                        ? `animate-slide-up stagger-${(index % 3) + 1}`
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center icon-hover"
                        style={{ backgroundColor: "#b98a3220" }}
                      >
                        <IconComponent
                          className="text-xl"
                          style={{ color: "#b98a32" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-lg font-bold mb-2"
                          style={{ color: "#821b1f" }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section
          ref={(el) => addToRefs(el, 40)}
          data-animate="cta"
          className={`py-16 px-4 transition-all duration-1000 ${
            isVisible.cta ? "animate-slide-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="rounded-3xl p-12 shadow-2xl hover-lift"
              style={{
                background: "linear-gradient(135deg, #821b1f 0%, #b98a32 100%)",
              }}
            >
              <div className="text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <FaPaw className="absolute top-4 left-4 text-4xl animate-float" />
                  <FaHeart className="absolute top-8 right-8 text-3xl animate-pulse-gentle" />
                  <FaStethoscope className="absolute bottom-4 right-4 text-4xl animate-bounce-gentle" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-responsive-md font-bold mb-6">
                    Ready to give your pet the best care?
                  </h2>
                  <p className="text-xl mb-8 opacity-90 leading-relaxed">
                    Book an appointment with our expert team today and
                    experience the Petpals difference.
                  </p>
                  <NavLink to="/appointment" style={{ textDecoration: "none" }}>
                    <button
                      className="bg-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg hover-glow"
                      style={{ color: "#821b1f" }}
                    >
                      Book an Appointment
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Decorative Elements */}
        <div className="fixed top-1/4 left-4 opacity-5 pointer-events-none">
          <FaPaw
            className="text-8xl animate-float"
            style={{ color: "#b98a32" }}
          />
        </div>
        <div className="fixed top-1/3 right-4 opacity-5 pointer-events-none">
          <FaHeart
            className="text-6xl animate-pulse-gentle"
            style={{ color: "#821b1f" }}
          />
        </div>
        <div className="fixed bottom-1/4 left-8 opacity-5 pointer-events-none">
          <FaStethoscope
            className="text-7xl animate-bounce-gentle"
            style={{ color: "#A2B29F" }}
          />
        </div>
      </div>
    </>
  );
};

export default Service;
