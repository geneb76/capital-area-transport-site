import React from "react";

export default function CapitalAreaTransportSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-blue-600 text-white">
       <div>
  <img src="/logo.png" alt="logo Capital Area Transport" className="h-12" />
</div>
        <div className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#promotions" className="hover:underline">Promotions</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-blue-500 to-teal-400">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Reliable Non-Emergency Medical Transportation</h1>
        <p className="text-lg md:text-2xl text-white mb-6">Serving Capital Area Communities with Care and Comfort</p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-2xl shadow hover:bg-gray-100 transition">Book a Ride</button>
      </section>

      {/* About Us Section */}
      <section id="about" className="p-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg">At Capital Area Transport, we are committed to providing high-quality, non-emergency medical transportation services. Our team of compassionate drivers ensures every client experiences a safe, reliable, and comfortable journey.</p>
        </div>
        <div className="rounded-2xl shadow bg-gray-200 flex items-center justify-center h-64">[Image Placeholder]</div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Wheelchair Transportation</h3>
            <p className="text-gray-600">Safe and secure transport for wheelchair-bound clients with specialized vehicles and trained staff.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Ambulatory Transportation</h3>
            <p className="text-gray-600">Helping clients who are able to walk but require assistance and reliable rides to their destinations.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Dialysis & Rehab Transport</h3>
            <p className="text-gray-600">Regular rides to and from dialysis centers, rehabilitation facilities, and healthcare appointments.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic">\"Capital Area Transport made every ride easy and stress-free. Their drivers are kind and professional!\"</p>
            <p className="mt-4 font-bold text-right\">- Jessica R.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-700 italic">\"Always on time and very reliable. I highly recommend their services to anyone in need of medical transport.\"</p>
            <p className="mt-4 font-bold text-right\">- Mark T.</p>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="bg-gray-50 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Current Promotions</h2>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-2xl font-bold mb-2">10 DOLLARS OFF ROUND TRIP FOR FIRST TIME CUSTOMERS</h3>
<p className="text-gray-700 mb-4">
  *PROMOTION CODE 02031401 MUST BE MENTIONED DURING RESERVATION
</p>
<p className="text-gray-700">
  OR<br />
  *Click here and leave a ⭐⭐⭐⭐⭐ review. Receive 5% off your next trip!
</p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Full Name" className="w-full p-4 rounded-2xl border" />
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-2xl border" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-2xl border"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-2xl shadow hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 p-6 text-center">
        <p>&copy; {new Date().getFullYear()} Capital Area Transport. All rights reserved.</p>
      </footer>
    </div>
  );
}
