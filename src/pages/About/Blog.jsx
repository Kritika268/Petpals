"use client";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaBookOpen,
  FaHeart,
  FaEye,
  FaUser,
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
    </div>
  );
};

export default Blog;
