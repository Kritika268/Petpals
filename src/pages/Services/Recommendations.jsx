"use client"

import { useState, useEffect, useRef } from "react"
import {
  FaLightbulb,
  FaPaw,
  FaStar,
  FaAppleAlt,
  FaRunning,
  FaShieldAlt,
  FaCut,
  FaBrain,
  FaSnowflake,
  FaHeart,
  FaBaby,
  FaUserMd,
  FaCalendarAlt,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import Testimonial from "../../components/Testimonial";

const Recommendations = () => {
  const [isVisible, setIsVisible] = useState({})
  const [currentStory, setCurrentStory] = useState(0)
  const observerRef = useRef()
  const elementsRef = useRef([])

  // Recommendations data
  const recommendations = [
    {
      id: 1,
      icon: FaAppleAlt,
      title: "Nutrition Tips",
      description: "Balanced diets for every breed and age—see our vet-approved food guides.",
      color: "#b98a32",
      category: "Nutrition",
    },
    {
      id: 2,
      icon: FaRunning,
      title: "Exercise & Play",
      description: "Fun activities and routines to keep your pet active and engaged.",
      color: "#821b1f",
      category: "Activity",
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Preventive Care",
      description: "Vaccination schedules, parasite control, and regular checkups for lifelong health.",
      color: "#b98a32",
      category: "Health",
    },
    {
      id: 4,
      icon: FaCut,
      title: "Grooming Advice",
      description: "Best practices for coat, skin, and dental care at home.",
      color: "#821b1f",
      category: "Grooming",
    },
    {
      id: 5,
      icon: FaBrain,
      title: "Mental Wellness",
      description: "Enrichment ideas and stress-busting tips for a happy, calm pet.",
      color: "#b98a32",
      category: "Wellness",
    },
    {
      id: 6,
      icon: FaSnowflake,
      title: "Seasonal Care",
      description: "How to keep your pet safe and comfortable through every season.",
      color: "#821b1f",
      category: "Seasonal",
    },
    {
      id: 7,
      icon: FaHeart,
      title: "Senior Pet Care",
      description: "Special recommendations for aging pets—mobility, diet, and comfort.",
      color: "#b98a32",
      category: "Senior Care",
    },
    {
      id: 8,
      icon: FaBaby,
      title: "Puppy/Kitten Essentials",
      description: "Early-life care tips for a strong, healthy start.",
      color: "#821b1f",
      category: "Young Pets",
    },
  ]

  // Success Stories data
  const successStories = [
    {
      id: 1,
      petName: "Rocky",
      petType: "Golden Retriever",
      owner: "Priya Sharma",
      image: "🐕",
      story:
        "Following Petpals' nutrition recommendations, Rocky lost 5kg and is now more energetic than ever! His coat is shinier and he loves his new exercise routine.",
      achievement: "Lost 5kg, improved energy",
    },
    {
      id: 2,
      petName: "Simba",
      petType: "Persian Cat",
      owner: "Rahul Mehta",
      image: "🐱",
      story:
        "The senior pet care advice helped Simba stay comfortable in his golden years. The mobility exercises and diet changes made a huge difference in his quality of life.",
      achievement: "Improved mobility & comfort",
    },
    {
      id: 3,
      petName: "Coco",
      petType: "Labrador Puppy",
      owner: "Anjali & Family",
      image: "🐶",
      story:
        "Petpals' seasonal care tips kept Coco safe through her first winter. The grooming advice and preventive care schedule helped her grow into a healthy, happy dog.",
      achievement: "Healthy first year",
    },
    {
      id: 4,
      petName: "Bruno",
      petType: "Rescue Dog",
      owner: "Sandeep Kumar",
      image: "🦮",
      story:
        "Bruno was anxious when we adopted him. The mental wellness recommendations and behavioral tips helped him become a confident, loving family member.",
      achievement: "Overcame anxiety",
    },
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
  }, [])

  // Auto-rotate success stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [successStories.length])

  const addToRefs = (el, index) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current[index] = el
    }
  }

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length)
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

        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(185, 138, 50, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(185, 138, 50, 0.4);
          }
          100% {
            box-shadow: 0 0 5px rgba(185, 138, 50, 0.2);
          }
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.1);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.1);
          }
          70% {
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

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
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
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Icon Hover Effects */
        .icon-hover {
          transition: all 0.3s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1) rotate(5deg);
        }

        /* Carousel Transition */
        .carousel-item {
          transition: all 0.5s ease-in-out;
        }

        /* Star Rating */
        .star-rating {
          color: #fbbf24;
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
          background-image: radial-gradient(circle at 1px 1px, rgba(185,138,50,0.1) 1px, transparent 0);
          background-size: 20px 20px;
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

        /* Stagger Animation Delays */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }

        /* Category Badge */
        .category-badge {
          background: rgba(185, 138, 50, 0.1);
          color: #b98a32;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(185, 138, 50, 0.2);
        }

        /* Achievement Badge */
        .achievement-badge {
          background: rgba(130, 27, 31, 0.1);
          color: #821b1f;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(130, 27, 31, 0.2);
        }
      `}</style>

      <div
        className="bg-[#b98a32] min-h-screen w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden pb-10"
        style={{ backgroundColor: "#f7f3ea", fontFamily: "Inter, Lato, sans-serif" }}
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
              <FaLightbulb
                className="text-6xl animate-bounce-gentle hover-scale cursor-pointer mr-4 animate-wiggle"
                style={{ color: "#b98a32" }}
              />
              <h1 className="text-responsive-xl font-bold gradient-text tracking-tight">
                Personalized Pet Recommendations
              </h1>
            </div>
            <p className="text-responsive-md font-medium mb-6" style={{ color: "#821b1f" }}>
              Expert advice for a healthier, happier pet.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed" style={{ color: "#8b7355" }}>
                Every pet is unique! Discover tailored recommendations for nutrition, wellness, activities, and
                more—curated by our veterinary experts to help your furry friend thrive.
              </p>
            </div>
          </div>
        </header>

        {/* Recommendations Grid Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 1)}
              data-animate="recommendations-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["recommendations-title"] ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-4" style={{ color: "#821b1f" }}>
                Expert-Curated Recommendations
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8b7355" }}>
                Discover personalized advice tailored to your pet's unique needs and lifestyle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((recommendation, index) => {
                const IconComponent = recommendation.icon
                return (
                  <div
                    key={recommendation.id}
                    ref={(el) => addToRefs(el, index + 10)}
                    data-animate={`recommendation-${recommendation.id}`}
                    className={`bg-white rounded-3xl p-6 shadow-lg card-hover hover-glow transition-all duration-1000 ${
                      isVisible[`recommendation-${recommendation.id}`]
                        ? `animate-scale-in stagger-${(index % 3) + 1}`
                        : "opacity-0 scale-90"
                    }`}
                  >
                    <div className="text-center mb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full icon-hover"
                          style={{ backgroundColor: `${recommendation.color}20` }}
                        >
                          <IconComponent className="text-3xl" style={{ color: recommendation.color }} />
                        </div>
                        <span className="category-badge">{recommendation.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: "#821b1f" }}>
                        {recommendation.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{recommendation.description}</p>
                    </div>
                    <button className="w-full btn-secondary py-3 px-4 rounded-xl font-semibold">Learn More</button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pet Success Stories Section */}
        <section className="py-16 px-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
          <div className="max-w-6xl mx-auto">
            <div
              ref={(el) => addToRefs(el, 20)}
              data-animate="stories-title"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["stories-title"] ? "animate-fade-in" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-responsive-lg font-bold mb-4" style={{ color: "#821b1f" }}>
                Pet Success Stories
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8b7355" }}>
                See how our recommendations have made a difference in the lives of pets and their families.
              </p>
            </div>

            <div
              ref={(el) => addToRefs(el, 21)}
              data-animate="stories-carousel"
              className={`relative transition-all duration-1000 ${
                isVisible["stories-carousel"] ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover-lift carousel-item">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-center md:text-left">
                    <div className="text-6xl mb-4">{successStories[currentStory].image}</div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#821b1f" }}>
                      {successStories[currentStory].petName}
                    </h3>
                    <p className="text-gray-600 mb-2">{successStories[currentStory].petType}</p>
                    <p className="text-sm font-medium" style={{ color: "#b98a32" }}>
                      Owner: {successStories[currentStory].owner}
                    </p>
                    <span className="achievement-badge mt-2 inline-block">
                      {successStories[currentStory].achievement}
                    </span>
                  </div>
                  <div className="flex-1">
                    <FaQuoteLeft className="text-3xl mb-4" style={{ color: "#b98a32" }} />
                    <p className="text-lg leading-relaxed italic" style={{ color: "#8b7355" }}>
                      {successStories[currentStory].story}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevStory}
                  className="p-3 rounded-full bg-white shadow-lg hover-scale transition-all duration-300"
                  style={{ color: "#821b1f" }}
                >
                  <FaChevronLeft />
                </button>

                <div className="flex gap-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentStory ? "scale-125" : "hover:scale-110"
                      }`}
                      style={{
                        backgroundColor: index === currentStory ? "#b98a32" : "#d1d5db",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStory}
                  className="p-3 rounded-full bg-white shadow-lg hover-scale transition-all duration-300"
                  style={{ color: "#821b1f" }}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonial />

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
              style={{ background: "linear-gradient(135deg, #821b1f 0%, #b98a32 100%)" }}
            >
              <div className="text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <FaPaw className="absolute top-4 left-4 text-4xl animate-float" />
                  <FaUserMd className="absolute top-8 right-8 text-3xl animate-pulse-gentle" />
                  <FaHeart className="absolute bottom-4 right-4 text-4xl animate-heartbeat" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-responsive-md font-bold mb-6">Have questions or need more guidance?</h2>
                  <p className="text-xl mb-8 opacity-90 leading-relaxed">
                    Book a consultation with our experts today and get personalized advice for your pet's unique needs!
                  </p>
                  <button
                    className="bg-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg hover-glow inline-flex items-center gap-3"
                    style={{ color: "#821b1f" }}
                  >
                    <FaCalendarAlt />
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Decorative Elements */}
        <div className="fixed top-1/4 left-4 opacity-5 pointer-events-none">
          <FaLightbulb className="text-8xl animate-float" style={{ color: "#b98a32" }} />
        </div>
        <div className="fixed top-1/3 right-4 opacity-5 pointer-events-none">
          <FaStar className="text-6xl animate-pulse-gentle" style={{ color: "#821b1f" }} />
        </div>
        <div className="fixed bottom-1/4 left-8 opacity-5 pointer-events-none">
          <FaBrain className="text-7xl animate-bounce-gentle" style={{ color: "#A2B29F" }} />
        </div>
      </div>
    </>
  )
}

export default Recommendations
