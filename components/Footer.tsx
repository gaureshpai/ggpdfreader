import '../public/styles/Footer.css';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gradient-to-r from-primary-color to-secondary-color text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div>
          <p className="text-sm text-center">&copy; {currentYear} Gauresh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;