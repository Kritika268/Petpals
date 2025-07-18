"use client";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaBookOpen,
  FaHeart,
  FaEye,
  FaUser,
  FaTags,
} from "react-icons/fa";
import puppyTrainingImage from "../../assets/puppy-training-featured.jpg";
import catBehaviourImage from "../../assets/cat-behavior.jpg";
import winterPetCareImage from "../../assets/winter-pet-care.jpg";
import petnutritionImage from "../../assets/pet-nutrition.jpg";

const Blog = () => {
  //Main feature of the blog page
  const featuredPost = {
    id: 1,
    title: "Complete Guide to Puppy Training: Building a Strong Foundation",
    excerpt:
      "Discover proven techniques and expert tips for training your new puppy. Build good habits and strengthen your bond from day one.",
    image: puppyTrainingImage,
    publishedDate: "March 15, 2024",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    category: "Training",
    views: "2.1k",
    likes: "156",
  };

  const blogPosts = [
    {
      id: 2,
      title: "Understanding Your Cat's Behavior: Signs of Health and Happiness",
      excerpt:
        "Learn to decode your feline friend's body language and behaviors to ensure they're living their best life.",
      image: catBehaviourImage,
      publishedDate: "March 12, 2024",
      readTime: "5 min read",
      author: "Dr. Michael Chen",
      category: "Health",
      views: "1.8k",
      likes: "124",
    },
    {
      id: 3,
      title: "Seasonal Pet Care: Preparing Your Pets for Winter Weather",
      excerpt:
        "Essential tips to keep your furry friends safe, warm, and healthy during the colder months.",
      image: winterPetCareImage,
      publishedDate: "March 10, 2024",
      readTime: "6 min read",
      author: "Dr. Emily Rodriguez",
      category: "Seasonal Care",
      views: "1.5k",
      likes: "98",
    },
    {
      id: 4,
      title: "Nutrition Essentials: What Every Pet Owner Should Know",
      excerpt:
        "A comprehensive guide to proper pet nutrition, from choosing the right food to understanding dietary needs.",
      image: petnutritionImage,
      publishedDate: "March 8, 2024",
      readTime: "7 min read",
      author: "Dr. Lisa Thompson",
      category: "Nutrition",
      views: "2.3k",
      likes: "187",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ea] overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#b98a32] rounded-full animate-float-gentle opacity-30"></div>
        <div
          className="absolute top-40 right-20 w-4 h-4 bg-[#821b1f] rounded-full animate-float-delayed opacity-25"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#b98a32] rounded-full animate-pulse-soft opacity-35"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="absolute top-2/3 right-12 w-5 h-5 bg-[#821b1f] rounded-full animate-bounce-soft opacity-20"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#b98a32] rounded-full animate-float-gentle opacity-30"
          style={{ animationDelay: "1.8s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#821b1f] via-[#9d2429] to-[#b98a32] text-white overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white opacity-8 rounded-full animate-pulse-ultra-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-5 rounded-full animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-3 rounded-full animate-spin-ultra-slow"></div>
          <div className="absolute top-32 right-1/4 w-24 h-24 bg-[#b98a32] opacity-10 rounded-full animate-bounce-gentle"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white opacity-8 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm animate-scale-in-bounce shadow-2xl">
              <FaBookOpen className="text-3xl text-white animate-pulse-gentle" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight animate-slide-up-hero">
              Our <span className="text-[#b98a32] animate-glow-soft">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto opacity-95 animate-fade-in-delayed">
              Insights, stories, and tips from the world of pet care
            </p>
            <div className="mt-10 w-32 h-2 bg-[#b98a32] mx-auto rounded-full animate-expand-width"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16 lg:mb-24 animate-fade-in-up">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border-l-8 border-[#b98a32] group relative">
              {/* Animated corner elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#b98a32] rounded-full animate-ping opacity-30"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#821b1f] rounded-full animate-pulse opacity-40"></div>

              <div className="lg:flex">
                {/* Featured Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  {/* Enhanced Overlay Elements */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-[#821b1f] to-[#9d2429] text-white px-5 py-3 rounded-full text-sm font-bold shadow-xl animate-bounce-in">
                    <div className="flex items-center">
                      <FaTags className="mr-2 animate-wiggle" />
                      Featured Article
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 bg-white bg-opacity-95 backdrop-blur-sm px-4 py-3 rounded-full shadow-xl">
                    <div className="flex items-center space-x-4 text-sm font-bold">
                      <div className="flex items-center text-[#b98a32] group-hover:scale-110 transition-transform duration-300">
                        <FaEye className="mr-2 animate-blink" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center text-red-500 group-hover:scale-110 transition-transform duration-300">
                        <FaHeart className="mr-2 animate-heartbeat" />
                        {featuredPost.likes}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-[#b98a32] text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse-gentle shadow-xl">
                    <div className="flex items-center">
                      <FaClock className="mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6 animate-slide-in-right">
                    <span className="inline-block bg-[#f7f3ea] text-[#821b1f] px-4 py-2 rounded-full text-sm font-bold border-2 border-[#821b1f] hover:bg-[#821b1f] hover:text-white transition-all duration-300 transform hover:scale-105">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2
                    className="text-2xl lg:text-4xl font-black text-[#821b1f] mb-8 leading-tight group-hover:text-[#b98a32] transition-colors duration-500 animate-slide-in-right"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {featuredPost.title}
                  </h2>

                  <p
                    className="text-gray-700 text-lg leading-relaxed mb-10 animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    {featuredPost.excerpt}
                  </p>

                  {/* Enhanced Meta Information */}
                  <div
                    className="flex flex-wrap items-center gap-8 mb-10 text-sm text-gray-600 animate-slide-in-right"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="flex items-center group/meta hover:text-[#b98a32] transition-colors duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#821b1f] to-[#9d2429] rounded-full flex items-center justify-center mr-3 group-hover/meta:scale-110 group-hover/meta:rotate-12 transition-all duration-500 shadow-lg">
                        <FaUser className="text-white text-sm" />
                      </div>
                      <span className="font-semibold">
                        {featuredPost.author}
                      </span>
                    </div>
                    <div className="flex items-center group/meta hover:text-[#b98a32] transition-colors duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#b98a32] to-[#d4a853] rounded-full flex items-center justify-center mr-3 group-hover/meta:scale-110 group-hover/meta:rotate-12 transition-all duration-500 shadow-lg">
                        <FaCalendarAlt className="text-white text-sm" />
                      </div>
                      <span className="font-semibold">
                        {featuredPost.publishedDate}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Read More Button */}
                  <button
                    className="bg-gradient-to-r from-[#821b1f] to-[#9d2429] text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-[#9d2429] hover:to-[#821b1f] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl flex items-center w-fit group/btn animate-bounce-in"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <span className="group-hover/btn:animate-pulse">
                      Read Full Article
                    </span>
                    <FaArrowRight className="ml-4 group-hover/btn:translate-x-2 transition-transform duration-300 text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Blog Posts Grid */}
          <div className="mb-20">
            <h3 className="text-3xl lg:text-5xl font-black text-[#821b1f] mb-16 text-center animate-slide-up">
              Latest <span className="text-[#b98a32]">Articles</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 border-l-6 border-[#b98a32] group animate-fade-in-up relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Animated corner elements */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#b98a32] rounded-full animate-ping opacity-30"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#821b1f] rounded-full animate-pulse opacity-40"></div>

                  {/* Post Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-115 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#821b1f] to-[#9d2429] text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg animate-slide-in-left">
                      {post.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-95 text-[#b98a32] px-3 py-2 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg animate-slide-in-right">
                      <div className="flex items-center">
                        <FaClock className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg animate-bounce-in">
                      <div className="flex items-center space-x-3 text-xs font-bold">
                        <div className="flex items-center text-[#b98a32] hover:scale-110 transition-transform duration-300">
                          <FaEye className="mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center text-red-500 hover:scale-110 transition-transform duration-300">
                          <FaHeart className="mr-1" />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-8">
                    <h4 className="text-xl font-black text-[#821b1f] mb-4 group-hover:text-[#b98a32] transition-colors duration-500 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>

                    <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed text-base">
                      {post.excerpt}
                    </p>

                    {/* Enhanced Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                      <div className="flex items-center group/author hover:text-[#b98a32] transition-colors duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#b98a32] to-[#d4a853] rounded-full flex items-center justify-center mr-3 group-hover/author:scale-110 group-hover/author:rotate-12 transition-all duration-500 shadow-md">
                          <FaUser className="text-white text-xs" />
                        </div>
                        <span className="font-semibold">{post.author}</span>
                      </div>
                      <div className="flex items-center group/date hover:text-[#b98a32] transition-colors duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#821b1f] to-[#9d2429] rounded-full flex items-center justify-center mr-3 group-hover/date:scale-110 group-hover/date:rotate-12 transition-all duration-500 shadow-md">
                          <FaCalendarAlt className="text-white text-xs" />
                        </div>
                        <span className="font-semibold">
                          {post.publishedDate}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Read More Link */}
                    <button className="w-full bg-[#f7f3ea] border-3 border-[#821b1f] text-[#821b1f] py-4 rounded-xl font-bold hover:bg-[#821b1f] hover:text-white transition-all duration-500 group/btn transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      <span className="flex items-center justify-center group-hover/btn:animate-pulse">
                        Read More
                        <FaArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* Enhanced Call to Action */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-[#821b1f] via-[#9d2429] to-[#b98a32] rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
              {/* Enhanced Background Decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full transform translate-x-24 -translate-y-24 animate-float-gentle"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full transform -translate-x-20 translate-y-20 animate-float-reverse"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-ultra-slow"></div>
                <div className="absolute top-16 left-16 w-16 h-16 bg-[#b98a32] opacity-20 rounded-full animate-bounce-gentle"></div>
                <div className="absolute bottom-16 right-16 w-20 h-20 bg-white opacity-15 rounded-full animate-float-delayed"></div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm shadow-2xl animate-scale-in-bounce">
                  <FaBookOpen className="text-3xl animate-pulse-gentle" />
                </div>
                <h3 className="text-3xl lg:text-5xl font-black mb-8 animate-slide-up">
                  Stay Updated with Pet Care Tips
                </h3>
                <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
                  Discover more expert advice, heartwarming stories, and
                  essential tips to keep your furry friends happy and healthy.
                  Join thousands of pet parents who trust our expertise.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-delayed">
                  <button className="bg-white text-[#821b1f] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#f7f3ea] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl group/btn">
                    <span className="group-hover/btn:animate-pulse">
                      Read All Articles
                    </span>
                  </button>
                  <button className="border-3 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#821b1f] transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-3xl group/btn">
                    <span className="group-hover/btn:animate-pulse">
                      Subscribe to Newsletter
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles with Smooth Animations */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced Smooth Animations */
        @keyframes float-gentle {
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(12px);
          }
        }

        @keyframes pulse-soft {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse-ultra-slow {
          0%,
          100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.02);
          }
        }

        @keyframes bounce-soft {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes spin-ultra-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scale-in-bounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-up-hero {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glow-soft {
          0%,
          100% {
            text-shadow: 0 0 15px rgba(185, 138, 50, 0.4);
          }
          50% {
            text-shadow: 0 0 25px rgba(185, 138, 50, 0.7);
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand-width {
          0% {
            width: 0;
          }
          100% {
            width: 8rem;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          70% {
            transform: scale(0.9);
            opacity: 0.9;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slide-up {
          0% {
            transform: translateY(25px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-up-delayed {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          75% {
            transform: rotate(-3deg);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }

        /* Animation Classes */
        .animate-float-gentle {
          animation: float-gentle 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 4s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        .animate-pulse-ultra-slow {
          animation: pulse-ultra-slow 6s ease-in-out infinite;
        }
        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-spin-ultra-slow {
          animation: spin-ultra-slow 25s linear infinite;
        }
        .animate-scale-in-bounce {
          animation: scale-in-bounce 1s ease-out;
        }
        .animate-slide-up-hero {
          animation: slide-up-hero 1s ease-out;
        }
        .animate-glow-soft {
          animation: glow-soft 3s ease-in-out infinite;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.5s both;
        }
        .animate-expand-width {
          animation: expand-width 2s ease-out 1s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.8s ease-out 0.4s both;
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        /* Enhanced Shadows */
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35);
        }

        /* Enhanced Borders */
        .border-3 {
          border-width: 3px;
        }
        .border-6 {
          border-width: 6px;
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

export default Blog;
