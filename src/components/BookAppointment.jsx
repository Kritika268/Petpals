import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";


const BookAppointment = () => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showFacilityDropdown, setShowFacilityDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");

  const cityFacilitiesMap = {
    "Gurugram": ["DCC Animal Hospital, Gurugram", "DCC Petcare Gurugram"],
    "New Delhi": ["DCC Animal Hospital, GK2, Delhi", "DCC Animal Hospital, Uday Park, Delhi"],
    "Jaipur": ["DCC Animal Hospital, Jaipur"],
    "Rewari": ["DCC Animal Hospital, Rewari"],
    "Tele-consult From Home": ["Not Applicable"]
  };

  const cities = Object.keys(cityFacilitiesMap);
  const [availableFacilities, setAvailableFacilities] = useState([]);
  const [showIconCity, setShowIconCity] = useState(true);
  const [showIconFacility, setShowIconFacility] = useState(true);

  const handleCitySelect = (city) => {
    const facilities = cityFacilitiesMap[city] || [];
    setAvailableFacilities(facilities);
    setSelectedCity(city);
    setSelectedFacility(""); // Reset facility selection
    setShowCityDropdown(false);
  };

  const handleFacilitySelect = (facility) => {
    setSelectedFacility(facility);
    setShowFacilityDropdown(false);
  };

  const toggleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
    setShowFacilityDropdown(false); // Close facility dropdown
  };

  const toggleFacilityDropdown = () => {
    if (availableFacilities.length > 0 && availableFacilities[0] !== "Not Applicable") {
      setShowFacilityDropdown(!showFacilityDropdown);
      setShowCityDropdown(false); // Close city dropdown
    }
  };

  const getFacilityButtonText = () => {
    if (selectedFacility) return selectedFacility;
    if (availableFacilities[0] === "Not Applicable") return "Not applicable";
    return "Select Facility";
  };

  const getCityButtonText = () => {
    return selectedCity || "Select City";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-10">
      <div className="rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 bg-[#821b1f] transition-all duration-300">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center text-[#f7f3ea]">
          Book an Appointment
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-2 lg:space-x-4 space-y-3 sm:space-y-0">
          {/* City Dropdown */}
          <div className="w-full sm:w-1/3 relative">
            <div
              onClick={toggleCityDropdown}
              onMouseDown={() => { setShowIconCity(false) }}
              onMouseUp={() => { setShowIconCity(true) }}
              onMouseLeave={() => { setShowIconCity(true) }}
              className="relative flex justify-center items-center text-[#f7f3ea] cursor-pointer shadow-md rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-2 sm:py-3 bg-[#821b1f] hover:bg-[#f7f3ea] hover:text-[#821b1f] border border-[#f7f3ea] transition-all duration-300 text-sm sm:text-base"
            >
              <span className="pointer-events-none truncate pr-6">{getCityButtonText()}</span>

              {showIconCity && (
                <div className="absolute right-3 sm:right-4">
                  <FaAngleDown className="text-xs sm:text-sm" />
                </div>
              )}
            </div>
            {showCityDropdown && (
              <div className="absolute top-full left-0 right-0 z-20 mt-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="max-h-48 overflow-y-auto">
                  {cities.map((city, index) => (
                    <button
                      key={index}
                      onClick={() => handleCitySelect(city)}
                      className="w-full bg-white text-[#821b1f] px-4 sm:px-6 py-3 hover:bg-[#f7f3ea] hover:text-[#821b1f] transition-all duration-300 text-sm sm:text-base text-left border-b border-gray-100 last:border-b-0 font-medium"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Facility Dropdown */}
          <div className="w-full sm:w-1/3 relative">
            <div
              onClick={toggleFacilityDropdown}
              onMouseDown={() => { setShowIconFacility(false) }}
              onMouseUp={() => { setShowIconFacility(true) }}
              onMouseLeave={() => { setShowIconFacility(true) }}
              className={`relative flex justify-center items-center text-[#f7f3ea] shadow-md rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-2 sm:py-3 bg-[#821b1f] border border-[#f7f3ea] transition-all duration-300 text-sm sm:text-base ${
                availableFacilities.length > 0 && availableFacilities[0] !== "Not Applicable"
                  ? 'cursor-pointer hover:bg-[#f7f3ea] hover:text-[#821b1f]'
                  : 'cursor-not-allowed opacity-60'
              }`}
            >
              <span className="pointer-events-none truncate pr-6">{getFacilityButtonText()}</span>

              {showIconFacility && availableFacilities.length > 0 && availableFacilities[0] !== "Not Applicable" && (
                <div className="absolute right-3 sm:right-4">
                  <FaAngleDown className="text-xs sm:text-sm" />
                </div>
              )}
            </div>
            {showFacilityDropdown && availableFacilities[0] !== "Not Applicable" && (
              <div className="absolute top-full left-0 right-0 z-20 mt-2 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="max-h-48 overflow-y-auto">
                  {availableFacilities.map((facility, index) => (
                    <button
                      key={index}
                      onClick={() => handleFacilitySelect(facility)}
                      className="w-full bg-white text-[#821b1f] px-4 sm:px-6 py-3 hover:bg-[#f7f3ea] hover:text-[#821b1f] transition-all duration-300 text-sm sm:text-base text-left border-b border-gray-100 last:border-b-0 font-medium"
                    >
                      {facility}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Book Button */}
          <div className="w-full sm:w-1/3">
            <button
              className="w-full bg-[#b98a32] text-[#f7f3ea] px-4 sm:px-6 py-2 sm:py-3 rounded-2xl sm:rounded-3xl hover:bg-[#f7f3ea] hover:text-[#821b1f] hover:border hover:border-[#821b1f] transition-all duration-300 text-sm sm:text-base font-medium"
              disabled={!selectedCity}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;