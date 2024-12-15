import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600"> Shaka MediCare</div>
          <ul className="flex gap-6 text-gray-700">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#products" className="hover:text-blue-600">Products</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to  Shaka MediCare</h1>
          <p className="text-lg mb-6">Your one-stop shop for all healthcare needs</p>
          <a href="#products" className="bg-white text-blue-600 py-2 px-4 rounded-md font-semibold">Shop Now</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide high-quality medicines and healthcare products at affordable prices. Our mission is to ensure the well-being of every individual by making healthcare accessible and convenient.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <Image src="/jf1q/pic-2.jpg" alt="Medicine" className="w-full h-48 object-cover" width={500} height={300} />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Pain Reliever</h3>
                <p className="text-gray-700 mb-4">Effective for headaches and body aches.</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Add to Cart</button>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <Image src="/jf1q/pic-1.jpg" alt="Medicine" className="w-full h-48 object-cover" width={500} height={300} />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Vitamin Supplements</h3>
                <p className="text-gray-700 mb-4">Boost your immunity and stay healthy.</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Add to Cart</button>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <Image src="/jf1q/pic-3.jpg" alt="Medicine" className="w-full h-48 object-cover" width={500} height={300} />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Antibiotics</h3>
                <p className="text-gray-700 mb-4">Treat bacterial infections effectively.</p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <input type="phone" placeholder="Your phone number" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 MediCare. All rights reserved.</p>
      </footer>
    </>
  );
}
