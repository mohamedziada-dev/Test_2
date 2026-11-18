
import React from 'react';

import {
  BriefcaseBusiness,
  ArrowUpRight
} from 'lucide-react';

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram
} from 'react-icons/fa6';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, link: '#', name: 'GitHub' },
    { icon: FaLinkedin, link: '#', name: 'LinkedIn' },
    { icon: FaXTwitter, link: '#', name: 'Twitter' },
    { icon: FaInstagram, link: '#', name: 'Instagram' },
  ];

  const footerLinks = [
    {
      title: 'For Clients',
      links: [
        'Find Freelancers',
        'Post a Project',
        'How It Works',
        'Pricing',
      ],
    },
    {
      title: 'For Freelancers',
      links: [
        'Find Work',
        'Create Profile',
        'Success Stories',
        'Community',
      ],
    },
    {
      title: 'Support',
      links: [
        'Help Center',
        'Contact Us',
        'Privacy Policy',
        'Terms of Service',
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div>
            <a
              href="/"
              className="flex items-center gap-2 text-white text-2xl font-bold mb-5"
            >
              <BriefcaseBusiness
                className="text-blue-500"
                size={28}
              />

              Freelance<span className="text-blue-500">Hub</span>
            </a>

            <p className="text-sm leading-7 max-w-xs">
              Connect with talented freelancers and find the perfect
              opportunities to bring your ideas to life.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.link}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-blue-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>
            © {currentYear} FreelanceHub. All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-1 hover:text-blue-500 transition-colors"
          >
            Start your journey
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}
