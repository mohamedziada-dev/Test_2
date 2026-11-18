
import React, { useState } from 'react';
import {
  BriefcaseBusiness,
  Menu,
  X,
  Search,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Find Work', href: '#jobs' },
    { name: 'Find Talent', href: '#talent' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <BriefcaseBusiness className="text-blue-600" size={28} />
            Freelance<span className="text-blue-600">Hub</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition">
              <Search size={18} />
              <span className="text-sm font-medium">Search</span>
            </button>

            <a
              href="#login"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
            >
              Log In
            </a>

            <a
              href="#signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 hover:text-blue-600 transition"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 py-5 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              <a href="#login" className="text-sm font-semibold text-slate-700">
                Log In
              </a>

              <a
                href="#signup"
                className="text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold transition"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
