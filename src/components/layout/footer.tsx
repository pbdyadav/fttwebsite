import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, LinkedinIcon, PhoneIcon, MailIcon, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Furtherance Technotree</h3>
            <p className="text-white-300">
              Your trusted partner for refurbished laptops, desktops, and IT services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BQue7tLjL/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/furtherance_technotree" target="_blank" rel="noreferrer" className="text-red-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.youtube.com/@furtherance_technotree" target="_blank" rel="noreferrer" className="text-red-600 hover:text-white">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/products/laptops" className="text-slate-300 hover:text-white">Laptops</Link>
              </li>
              <li>
                <Link to="/products/desktops" className="text-slate-300 hover:text-white">Desktops</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white">IT Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/laptops/dell" className="text-slate-300 hover:text-white">Dell Laptops</Link>
              </li>
              <li>
                <Link to="/products/laptops/hp" className="text-slate-300 hover:text-white">HP Laptops</Link>
              </li>
              <li>
                <Link to="/products/laptops/lenovo" className="text-slate-300 hover:text-white">Lenovo Laptops</Link>
              </li>
              <li>
                <Link to="/products/laptops/macbook-air" className="text-slate-300 hover:text-white">MacBook Air</Link>
              </li>
              <li>
                <Link to="/products/laptops/macbook-pro" className="text-slate-300 hover:text-white">MacBook Pro</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-blue-300" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-white">+91 92001 11400, +91 97525 32581</a>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5 text-red-600" />
                <a href="mailto:info@furtherance-tech.com" className="text-slate-300 hover:text-white">fttpvtltd@gmail.com</a>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="mt-6 bg-white text-blue-700 hover:bg-blue-50"> Contact Us </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {currentYear} Furtherance Technotree Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}