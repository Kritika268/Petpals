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
};

export default Blog;
