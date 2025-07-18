import {
  FaHeart,
  FaShieldAlt,
  FaPaw,
  FaStethoscope,
  FaLeaf,
  FaEye,
  FaHandHoldingHeart,
} from "react-icons/fa";
import image from "../../assets/image.png";

const MissionStatement = () => {
  return (
    <div className="bg-[#faf5ef] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-tr from-[#7a181c] via-[#a32b30] to-[#c59c45] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-28 left-10 w-28 h-28 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        </div>

        <div className="relative px-6 py-24 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <FaLeaf className="text-3xl text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-[#f1d07a]">Purpose</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-95">
            Healing pets, empowering owners — we’re here to care, comfort, and
            connect.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Core Belief */}
        <div className="rounded-3xl shadow-xl p-10 md:p-14 bg-white border-l-[10px] border-[#b98a32] mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={image}
                alt="Animal healthcare"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute bottom-0 right-0 bg-[#b98a32] text-white p-5 rounded-tl-2xl shadow-xl">
                <FaPaw className="text-2xl" />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#7a181c] rounded-full flex items-center justify-center mr-4">
                  <FaHandHoldingHeart className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-[#7a181c]">
                  Pet Wellness, Heart First
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At DCC Pets, we aren’t just about check-ups and treatments —
                we’re about lifelong companionship. Our mission is to offer
                heartfelt care and modern veterinary solutions that elevate the
                lives of pets and the people who love them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From simple consults to complex surgeries, our skilled team
                blends expertise with empathy at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[#7a181c] hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7a181c] to-[#a52c2e] rounded-xl flex items-center justify-center mr-4">
                <FaEye className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#7a181c]">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              We aim to be recognized as the most trusted name in pet healthcare
              — pioneering wellness, innovation-driven treatments, and heartfelt
              community service.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[#c59c45] hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c59c45] to-[#e9cd6c] rounded-xl flex items-center justify-center mr-4">
                <FaHeart className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#7a181c]">Our Values</h3>
            </div>
            <ul className="space-y-3 text-gray-700 text-base">
              <li>• Ethical care with compassion</li>
              <li>• Constant pursuit of medical excellence</li>
              <li>• Clear, kind communication</li>
              <li>• Learning that never stops</li>
            </ul>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="bg-gradient-to-r from-[#7a181c] via-[#a52b2f] to-[#c59c45] text-white p-12 rounded-3xl shadow-xl relative mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-14">
              What Guides Our Every Step
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <FaStethoscope className="text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Top-Tier Treatment
                </h4>
                <p className="opacity-90 text-sm leading-relaxed">
                  Every animal is cared for with medical precision and love,
                  using the latest tools in veterinary science.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <FaHeart className="text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Wholehearted Healing
                </h4>
                <p className="opacity-90 text-sm leading-relaxed">
                  We see the soul behind the fur — and we honor that bond with
                  genuine compassion.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Unshakable Trust</h4>
                <p className="opacity-90 text-sm leading-relaxed">
                  Your trust means everything — we earn it through honesty,
                  transparency, and unwavering care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white rounded-3xl p-12 text-center border-t-8 border-[#c59c45] shadow-lg">
          <h3 className="text-3xl font-bold text-[#7a181c] mb-6">
            Care That’s Worth Barking About
          </h3>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Thousands of pet parents trust us for one reason: we treat your pet
            like family — because they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-[#7a181c] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#a32b30] transition">
              Schedule Visit
            </button>
            <button className="border-2 border-[#c59c45] text-[#c59c45] px-8 py-4 rounded-xl font-medium hover:bg-[#c59c45] hover:text-white transition">
              Know Us Better
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
