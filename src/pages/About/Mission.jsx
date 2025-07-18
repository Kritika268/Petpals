import {
  FaHeart,
  FaShieldAlt,
  FaPaw,
  FaStethoscope,
  FaLeaf,
  FaEye,
  FaHandHoldingHeart,
} from "react-icons/fa";

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
      </div>
    </div>
  );
};

export default MissionStatement;
