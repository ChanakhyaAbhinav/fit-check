import React from 'react';
import rekhaSharmaImg from './rekha_sharma.jpg';

function App() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-center drop-shadow-lg">Transform Your Health with Fit Check</h1>
          <p className="text-xl md:text-2xl mb-8 text-center">Ms. Rekha Sharma, MSC in Nutrition</p>
          <a href="#contact" className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow hover:bg-blue-100 transition text-lg">Book a Consultation</a>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16" id="about">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
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
              <li><b>Visiting at:</b> Kokilaben Hospital, Apollo Hospital, Copper Hospital</li>
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
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16" id="services">
        <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-16" id="achievements">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Achievements</h2>
          <p className="text-xl mb-2">Over <span className="font-bold text-blue-700">15,000+</span> clients managed</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <div className="bg-blue-200 rounded-lg px-8 py-6 font-semibold">Best Nutritionist 2023<br/>American Society of Nutrition</div>
            <div className="bg-blue-200 rounded-lg px-8 py-6 font-semibold">Public Service Award 2024<br/>National Council of Indian Congress</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16" id="mission">
        <div className="bg-blue-50 rounded-xl shadow p-8 md:p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Mission</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Ms. Rekha Sharma is a seasoned Nutritionist with more than 10 years of experience doing good business the traditional way.</li>
            <li>Now, seeing the surge in digital opportunity, she seeks expert help to launch her and her business "FIT CHECK" in the digital world and create a digital presence.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16" id="contact">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact & Book Now</h2>
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
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 text-center mt-12">
        <p className="text-lg">&copy; {new Date().getFullYear()} Fit Check. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
