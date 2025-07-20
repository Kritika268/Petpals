"use client"
import { useState, useEffect, useRef } from "react"
import {
  FaGift,
  FaStar,
  FaPaw,
  FaStethoscope,
  FaCheck,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaCrown,
  FaHeart,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa"
import { client } from "../../lib/sanity";
import { Link} from "react-router-dom";
import { faqQuery } from "../../lib/queries"


const Packages = () => {
  const [isVisible, setIsVisible] = useState({})
  const [openFaq, setOpenFaq] = useState(null)
  const [faqs, setFaqs] = useState([])
  const [packages, setPackages] = useState([])
  const observerRef = useRef()
  const elementsRef = useRef([])

  // Fetch packages from Sanity
  useEffect(() => {
    const fetchPackages = async () => {
      const data = await client.fetch(`*[_type == "membership"] | order(_createdAt asc)`)
      // Map Sanity data to our package structure
      const mappedPackages = data.map((pkg, index) => ({
        id: pkg._id,
        name: pkg.time,
        price: `₹${pkg.price}`,
        period: pkg.time.includes('Month') ? `${pkg.time.replace('Month', '')} months` : pkg.time,
        description: `Comprehensive ${pkg.time.toLowerCase()} care for your pet`,
        icon: index === 0 ? FaStethoscope : index === 1 ? FaCrown : FaStar,
        color: index === 1 ? "#821b1f" : "#f7f3ea",
        popular: index === 1, // Make the middle one popular
        benefits: pkg.benefits || [],
        features: {
          consultations: index === 0 ? "2" : "Unlimited",
          vaccinations: index === 0 ? "1" : index === 1 ? "2" : "Unlimited",
          grooming: index === 0 ? "10% off" : index === 1 ? "2 sessions" : "4 sessions",
          pharmacy: index === 0 ? "5% off" : index === 1 ? "15% off" : "20% off",
          emergency: index !== 0,
          healthScreening: index === 2,
          events: index === 2,
        }
      }))
      setPackages(mappedPackages)
    }

    fetchPackages()
  }, [])

  // FAQ data
  useEffect(() => {
    client.fetch(faqQuery).then(setFaqs)
  }, [])

  // Comparison features
  const comparisonFeatures = [
    { name: "Consultations", key: "consultations" },
    { name: "Vaccinations", key: "vaccinations" },
    { name: "Grooming", key: "grooming" },
    { name: "Pharmacy Discount", key: "pharmacy" },
    { name: "Emergency Support", key: "emergency" },
    { name: "Health Screening", key: "healthScreening" },
    { name: "Exclusive Events", key: "events" },
  ]

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current.observe(el)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [packages])

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el
    }
  }

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  return (
    <>
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');
        
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
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
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
          0%, 7% {
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
          40%, 100% {
            transform: rotateZ(0);
          }
        }

        @keyframes checkmark {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
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

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
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

        .animate-checkmark {
          animation: checkmark 0.5s ease-out forwards;
        }

        /* Hover Effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
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
          box-shadow: 0 0 30px rgba(185, 138, 50, 0.4);
        }

        /* Button Animations */
        .btn-primary {
          background: #821b1f;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          background: #f7f3ea;
          color: #821b1f;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(247, 243, 234, 0.3);
        }

        /* Card Hover Effects */
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Popular Badge */
        .popular-badge {
          background: linear-gradient(135deg, #821b1f 0%, #f7f3ea 100%);
          animation: pulseGentle 2s infinite;
        }

        /* Accordion Animation */
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .accordion-content.open {
          max-height: 200px;
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #821b1f 0%, #f7f3ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Background Pattern */
        .bg-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(185,138,50,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }

        /* Responsive Text */
        .text-responsive-xl {
          font-size: clamp(1.5rem, 5vw, 3rem);
        }

        .text-responsive-lg {
          font-size: clamp(1.25rem, 4vw, 2rem);
        }

        .text-responsive-md {
          font-size: clamp(1rem, 3vw, 1.5rem);
        }

        .text-responsive-sm {
          font-size: clamp(0.875rem, 2.5vw, 1.25rem);
        }

        /* Stagger Animation Delays */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }

        /* Table Styles */
        .comparison-table {
          border-collapse: separate;
          border-spacing: 0;
        }

        .comparison-table th,
        .comparison-table td {
          border: 1px solid #e5e7eb;
          border-top: none;
        }

        .comparison-table th:first-child,
        .comparison-table td:first-child {
          border-left: none;
        }

        .comparison-table th:last-child,
        .comparison-table td:last-child {
          border-right: none;
        }

        .comparison-table tr:last-child td {
          border-bottom: none;
        }
      `}</style>

      <div
        className="full-width-breakout"
        style={{ backgroundColor: "#b98a32", fontFamily: "Inter, Lato, sans-serif" }}
      >
        {/* Header Section */}
        <header
          ref={(el) => addToRefs(el, 0)}
          data-animate="header"
          className={`text-center py-12 md:py-16 px-4 transition-all duration-1000 ${
            isVisible.header ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <FaGift
                className="text-4xl md:text-6xl animate-bounce-gentle hover-scale cursor-pointer mr-2 md:mr-4 animate-wiggle"
                style={{ color: "#f7f3ea" }}
              />
              <h1 className="text-responsive-xl font-bold gradient-text tracking-tight">
                Membership & Service Packages
              </h1>
            </div>
            <p className="text-responsive-md font-medium mb-4 md:mb-6 text-white">
              Flexible plans for every pet and every family.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-responsive-sm leading-relaxed text-white opacity-90">
                Choose from our thoughtfully designed packages to give your pet the best care, value, and convenience.
                Whether you're looking for unlimited consultations, grooming bundles, or wellness plans, we have
                something for every need.
              </p>
            </div>
          </div>
        </header>

        {/* Packages Grid Section */}
        {packages.length > 0 && (
          <section className="py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div
                ref={(el) => addToRefs(el, 1)}
                data-animate="packages-title"
                className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
                  isVisible["packages-title"] ? "animate-slide-up" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-responsive-lg font-bold mb-2 md:mb-4 text-white">
                  Choose Your Perfect Plan
                </h2>
                <p className="text-responsive-sm max-w-2xl mx-auto text-white opacity-90">
                  Designed with your pet's health and your peace of mind in focus.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {packages.map((pkg, index) => {
                  const IconComponent = pkg.icon
                  return (
                    <div
                      key={pkg.id}
                      ref={(el) => addToRefs(el, index + 10)}
                      data-animate={`package-${pkg.id}`}
                      className={`relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg card-hover hover-glow transition-all duration-1000 ${
                        isVisible[`package-${pkg.id}`] ? `animate-scale-in stagger-${index + 1}` : "opacity-0 scale-90"
                      } ${pkg.popular ? "ring-4 ring-opacity-50" : ""}`}
                      style={{ ringColor: pkg.popular ? "#f7f3ea" : "transparent" }}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                          <div className="popular-badge text-white px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold">
                            Most Popular
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-4 md:mb-6">
                        <div
                          className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 md:mb-4 hover-scale"
                          style={{ backgroundColor: `${pkg.color}20` }}
                        >
                          <IconComponent className="text-3xl md:text-4xl" style={{ color: pkg.color }} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#821b1f]">
                          {pkg.name}
                        </h3>
                        <div className="mb-3 md:mb-4">
                          <span className="text-3xl md:text-4xl font-bold text-[#b98a32]">
                            {pkg.price}
                          </span>
                          <span className="text-gray-600 ml-2">/ {pkg.period}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{pkg.description}</p>
                      </div>

                      <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                        {pkg.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2 md:gap-3">
                            <div
                              className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center animate-checkmark"
                              style={{ backgroundColor: "#b98a3220" }}
                            >
                              <FaCheck className="text-xs" style={{ color: "#b98a32" }} />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/plans">
                        <button className="w-full btn-primary text-white py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-base md:text-lg">
                          Choose Plan
                        </button>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Comparison Table Section */}
        {packages.length > 0 && (
          <section className="py-12 md:py-16 px-4" style={{ backgroundColor: "rgba(247, 243, 234, 0.9)" }}>
            <div className="max-w-6xl mx-auto">
              <div
                ref={(el) => addToRefs(el, 20)}
                data-animate="comparison-title"
                className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
                  isVisible["comparison-title"] ? "animate-fade-in" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-responsive-lg font-bold mb-2 md:mb-4 text-[#821b1f]">
                  Compare All Plans
                </h2>
                <p className="text-responsive-sm max-w-2xl mx-auto text-[#5e3a1f]">
                  See exactly what's included in each package at a glance.
                </p>
              </div>

              <div
                ref={(el) => addToRefs(el, 21)}
                data-animate="comparison-table"
                className={`overflow-x-auto transition-all duration-1000 ${
                  isVisible["comparison-table"] ? "animate-slide-up" : "opacity-0 translate-y-8"
                }`}
              >
                <table className="comparison-table w-full bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                  <thead>
                    <tr style={{ backgroundColor: "#f7f3ea" }}>
                      <th className="p-3 md:p-4 text-left font-bold text-[#821b1f] text-sm md:text-base">
                        Features
                      </th>
                      {packages.map((pkg) => (
                        <th key={pkg.id} className="p-3 md:p-4 text-center font-bold text-[#821b1f] text-sm md:text-base">
                          <div className="flex flex-col items-center">
                            <span>{pkg.name}</span>
                            <span className="text-xs md:text-sm font-normal text-gray-600">{pkg.price}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={feature.key} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 md:p-4 font-medium text-[#5e3a1f] text-sm md:text-base">
                          {feature.name}
                        </td>
                        {packages.map((pkg) => (
                          <td key={pkg.id} className="p-3 md:p-4 text-center text-sm md:text-base">
                            {typeof pkg.features[feature.key] === "boolean" ? (
                              pkg.features[feature.key] ? (
                                <FaCheck className="mx-auto text-green-500" />
                              ) : (
                                <FaTimes className="mx-auto text-gray-400" />
                              )
                            ) : (
                              <span style={{ color: "#b98a32" }}>{pkg.features[feature.key]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 30)}
              data-animate="faq-title"
              className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
                isVisible["faq-title"] ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-2 md:mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-responsive-sm text-white opacity-90">
                Everything you need to know about our packages.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq._id}
                  ref={(el) => addToRefs(el, index + 40)}
                  data-animate={`faq-${faq._id}`}
                  className={`bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 ${
                    isVisible[`faq-${faq._id}`]
                      ? `animate-slide-up stagger-${(index % 3) + 1}`
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq._id)}
                    className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-base md:text-lg text-[#821b1f]">
                      {faq.question}
                    </span>
                    {openFaq === faq._id ? (
                      <FaChevronUp style={{ color: "#b98a32" }} />
                    ) : (
                      <FaChevronDown style={{ color: "#b98a32" }} />
                    )}
                  </button>
                  <div className={`accordion-content ${openFaq === faq._id ? "open" : ""}`}>
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section
          ref={(el) => addToRefs(el, 50)}
          data-animate="cta"
          className={`py-12 md:py-16 px-4 transition-all duration-1000 ${
            isVisible.cta ? "animate-slide-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl hover-lift"
              style={{ background: "linear-gradient(135deg, #821b1f 0%, #5e3a1f 100%)" }}
            >
              <div className="text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <FaPaw className="absolute top-2 md:top-4 left-2 md:left-4 text-2xl md:text-4xl animate-float" />
                  <FaHeart className="absolute top-4 md:top-8 right-4 md:right-8 text-xl md:text-3xl animate-pulse-gentle" />
                  <FaUsers className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-2xl md:text-4xl animate-bounce-gentle" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-responsive-md font-bold mb-4 md:mb-6">Not sure which package is right for you?</h2>
                  <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
                    Contact our team for personalized recommendations!
                  </p>
                  <Link to="/about/contact" style={{ textDecoration: "none" }}>
                    <button
                      className="bg-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg hover-glow inline-flex items-center gap-2 md:gap-3"
                      style={{ color: "#821b1f" }}
                    >
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Decorative Elements */}
        <div className="fixed top-1/4 left-4 opacity-5 pointer-events-none">
          <FaGift className="text-4xl md:text-8xl animate-float" style={{ color: "#f7f3ea" }} />
        </div>
        <div className="fixed top-1/3 right-4 opacity-5 pointer-events-none">
          <FaStar className="text-3xl md:text-6xl animate-pulse-gentle" style={{ color: "#821b1f" }} />
        </div>
        <div className="fixed bottom-1/4 left-8 opacity-5 pointer-events-none">
          <FaShieldAlt className="text-4xl md:text-7xl animate-bounce-gentle" style={{ color: "#A2B29F" }} />
        </div>
      </div>
    </>
  )
}

export default Packages