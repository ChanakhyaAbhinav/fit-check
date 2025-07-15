import React, { useState, useEffect, useRef } from 'react';
import rekhaSharmaImg from './rekha_sharma.jpg';
import { motion } from 'framer-motion';
import MedicineSVG from './assets/undraw_medicine_hqqg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';

function App() {
  // All hooks and state must be inside the component
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      text: "Ms. Rekha's guidance helped me manage my diabetes and lose 10kg. Her plans are practical and easy to follow!"
    },
    {
      name: "Anjali Mehta",
      role: "Student",
      image: require("./assets/student.jpg"),
      text: "I struggled with PCOS for years. Thanks to Fit Check, my lifestyle has completely changed for the better."
    },
    {
      name: "Suresh Kumar",
      role: "Manager",
      image: require("./assets/managerr.jpg"),
      text: "The personalized nutrition plan was a game changer for my family. Thank you Fit Check and Ms. Rekha Sharma!"
    },
    {
      name: "Kavita Patel",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=150&h=150&fit=crop&crop=face",
      text: "Fit Check helped me overcome my weight issues. Ms. Rekha's approach is both professional and caring."
    },
    {
      name: "Amit Singh",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      text: "Excellent service! The nutrition plans are tailored perfectly to Indian lifestyle and food habits."
    }
  ];
  const swiperRef = useRef(null);
  const [autoplayDirection, setAutoplayDirection] = useState(1);
  useEffect(() => {
    if (!swiperRef.current || typeof swiperRef.current.slideTo !== 'function') return;
    let timeout;
    function autoSlide() {
      if (autoplayDirection === 1) {
        if (swiperRef.current.isEnd) {
          setAutoplayDirection(-1);
          timeout = setTimeout(() => swiperRef.current.slideTo(swiperRef.current.activeIndex - 1), 3500);
        } else {
          timeout = setTimeout(() => swiperRef.current.slideTo(swiperRef.current.activeIndex + 1), 3500);
        }
      } else {
        if (swiperRef.current.isBeginning) {
          setAutoplayDirection(1);
          timeout = setTimeout(() => swiperRef.current.slideTo(swiperRef.current.activeIndex + 1), 3500);
        } else {
          timeout = setTimeout(() => swiperRef.current.slideTo(swiperRef.current.activeIndex - 1), 3500);
        }
      }
    }
    autoSlide();
    return () => clearTimeout(timeout);
  }, [autoplayDirection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center py-3">
          <div className="flex items-center gap-2">
            <div className="bg-blue-700 text-white font-extrabold text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow mr-2">FC</div>
            <span className="text-2xl font-bold tracking-wide text-blue-700">Fit Check</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-7xl md:text-7xl font-extrabold mb-4 tracking-tight text-center drop-shadow-lg">Transform Your Health with Fit Check</h1>
          <p className="text-xl md:text-2xl mb-8 text-center">Ms. Rekha Sharma, MSC in Nutrition</p>
          <a href="#contact" className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-100 transition text-lg">Book a Consultation</a>
        </div>
      </header>

      {/* About Section */}
      <motion.section
        className="container mx-auto px-4 py-16" id="about"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */} 
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={rekhaSharmaImg}
              alt="Ms. Rekha Sharma"
              className="w-64 h-84 object-cover rounded-2xl shadow-lg mb-4 border-4 border-blue-100"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-700 mb-1">Ms. Rekha Sharma</h2>
              <p className="text-lg text-gray-600">MSC in Nutrition</p>
            </div>
          </div>
          {/* Details */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">About the Company/Nutritionist</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><b>Company Name:</b> Fit Check</li>
              <li><b>Visiting at:</b> Kokilaben Hospital, Apollo Hospital, Coopper Hospital</li>
              <li><b>President:</b> NIN</li>
              <li>Offers service for weight management and lifestyle modification to her clients</li>
              <li>Expertise in Nutrition for BP, PCOS, Diabetes and Obesity</li>
              <li>10 years experience, based at Mumbai</li>
              <li>Clientele list of more than 15,000 persons managed over time</li>
              <li><b>Awards:</b>
                <ul className="list-disc pl-6 mt-1 text-base">
                  <li>Best Nutritionist 2023 by American Society of Nutrition</li>
                  <li>Awarded by National Council of Indian Congress for public service 2024</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="container mx-auto px-4 py-16" id="services"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-5xl font-bold mb-8 text-blue-700 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-100 rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Weight Management</h3>
            <p>Personalized plans for healthy weight loss or gain, tailored to your lifestyle.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Lifestyle Modification</h3>
            <p>Guidance for sustainable changes to improve your overall well-being.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Nutrition for BP, PCOS, Diabetes</h3>
            <p>Expertise in managing chronic conditions through evidence-based nutrition.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-8 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">Obesity Management</h3>
            <p>Comprehensive support for overcoming obesity and related health issues.</p>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="container mx-auto px-4 py-16" id="achievements"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-blue-700">Achievements</h2>
          <p className="text-xl mb-2">Over <span className="font-bold text-blue-700">15,000+</span> clients managed</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <div className="bg-blue-200 rounded-lg px-8 py-6 font-semibold">Best Nutritionist 2023<br/>American Society of Nutrition</div>
            <div className="bg-blue-200 rounded-lg px-8 py-6 font-semibold">Public Service Award 2024<br/>National Council of Indian Congress</div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="container mx-auto px-4 py-16" id="mission"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="bg-blue-50 rounded-xl shadow p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src={MedicineSVG} alt="Medicine Illustration" className="w-96 max-w-xs md:max-w-md lg:max-w-lg" />
          </div>
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6 text-blue-700">Our Mission</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Ms. Rekha Sharma is a seasoned Nutritionist with more than 10 years of experience doing good business the traditional way.</li>
              <li>Now, seeing the surge in digital opportunity, she seeks expert help to launch her and her business "FIT CHECK" in the digital world and create a digital presence.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="container mx-auto px-4 md:px-0 py-16"
        id="testimonials"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-blue-700 text-center">What Our Clients Say</h2>
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              reverseDirection: autoplayDirection === -1,
              disableOnInteraction: false,
            }}
            onSwiper={swiper => { swiperRef.current = swiper; }}
            onReachEnd={() => setAutoplayDirection(-1)}
            onReachBeginning={() => setAutoplayDirection(1)}
            className="pb-8"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center h-full mx-2 border border-blue-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 mb-4 shadow"
                  />
                  <p className="text-lg italic mb-4 text-gray-700">"{t.text}"</p>
                  <div className="text-center">
                    <span className="block font-semibold text-blue-700">{t.name}</span>
                    <span className="block text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="container mx-auto px-4 py-16" id="contact"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-blue-700">Contact & Book Now</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Your Email" className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" placeholder="Your Mobile" className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Your Message" className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white font-semibold px-8 py-3 rounded shadow hover:bg-blue-700 transition text-lg">Send Message</button>
          </form>
          <div className="mt-8 text-center text-gray-600">
            <p>Based in Mumbai</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 text-center mt-12">
        <p className="text-lg">&copy; {new Date().getFullYear()} Fit Check. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
