import PackageSection from '../components/PackageSection';
import Carousel from '../components/Carousel';
import HelpButtonModal from '../components/HelpButtonModal';
import BookAppointment from '../components/BookAppointment';
import MembershipSection from '../components/MembershipSection';
import Service from '../components/Service';
import AppointmentSection from '../components/AppointmentSection';
import DoctorsMeet from '../components/DoctorsMeet';
import PetConnect from '../components/PetConnect';
import Testimonial from '../components/Testimonial';
import PressAndMedia from '../components/PressAndMedia';

import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

function Home() {
  const [heroSlides, setHeroSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "heroSlide"]{
            _id,
            title,
            description,
            imageUrl,
            "image": image.asset->url
          }
        `);

        // Convert Portable Text (title) to React fragments
        const transformed = data.map((slide, index) => ({
          ...slide,
          title: slide.title?.map((block, i) => (
            <React.Fragment key={i}>
              {block.children?.map(child => child.text).join('')}
              {i !== slide.title.length - 1 && <br />}
            </React.Fragment>
          )),
          image: slide.imageUrl || slide.image // Use imageUrl if available
        }));

        setHeroSlides(transformed);
      } catch (error) {
        console.error('Error fetching hero slides:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  return (
    <>  
      <HelpButtonModal />

      <div className="relative">
        {loading ? (
          <div className="bg-gray-50 flex items-center justify-center p-4 h-64 sm:h-80 lg:h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-4 text-sm sm:text-lg">Loading content...</p>
            </div>
          </div>
        ) : heroSlides.length > 0 ? (
          <div className="bg-gray-50 flex items-center justify-center p-2 sm:p-4">
            <Carousel slides={heroSlides} />
          </div>
        ) : (
          <div className="bg-gray-50 flex items-center justify-center p-4 h-64 sm:h-80 lg:h-96">
            <p className="text-sm sm:text-lg">No slides available</p>
          </div>
        )}

        {/* BookAppointment - Responsive positioning */}
        <div className="relative -mt-8 sm:-mt-12 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 w-full px-4 lg:px-0">
          <BookAppointment />
        </div>

        {/* MembershipSection with proper spacing */}
        <div className="relative mt-8 lg:mt-0">
          <MembershipSection />
        </div>
      </div>
  
      <PackageSection />
      <Service />
      <AppointmentSection/>
      <DoctorsMeet />
      <PetConnect />
      <Testimonial />
      <PressAndMedia />
    </>
  );
}

export default Home;