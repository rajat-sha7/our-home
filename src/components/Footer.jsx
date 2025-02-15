import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', url: '/about' },
        { name: 'Features', url: '/features' },
        { name: 'Works', url: '/works' },
        { name: 'Career', url: '/career' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'Customer Support', url: '/support' },
        { name: 'Delivery Details', url: '/delivery' },
        { name: 'Terms & Conditions', url: '/terms' },
        { name: 'Privacy Policy', url: '/privacy' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Free eBooks', url: '/ebooks' },
        { name: 'Development Tutorial', url: '/tutorial' },
        { name: 'How To-Blog', url: '/blog' },
        { name: 'YouTube Playlist', url: '/youtube' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
  ];

  return (
    <footer className="w-full bg-black lg:mt-[152px] mt-[100px] pb-6 px-5 text-white">
      <div className="m-auto max-w-[1140px] md:pt-[92px] pt-[62px]">
        {/* Footer Content */}
        <div className="md:flex md:flex-row flex-col sm:min-w-[562px] min-w-full mx-auto justify-between md:pb-[62px] pb-[32px]">
          <div className="pb-10 md:pb-0">
            <a href="">

            <img
              src="images/home.png"
              alt="Home"
              className="w-[136px] h-[38px]"
            />
            </a>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col md:gap-[32px] gap-3 pb-8 md:pb-0"
            >
              <h1 className="md:text-[18px] text-[20px] font-medium leading-[26.1px]">
                {section.title}
              </h1>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  className="md:text-[14px] text-[13px] leading-[21.7px] font-normal text-[#E4E4E7] hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Social Media and Copyright */}
        <div className="max-w-[1140px] mx-auto border-t-2 border-t-white flex flex-col md:flex-row justify-between items-center pt-[24px]">
          <div className="text-[14px] font-normal leading-[21.7px] opacity-[80%]">
            &copy; Copyright 2025, All Rights Reserved by OurHome
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                // rel="noopener noreferrer"
                className="text-white text-[18px] hover:text-[#1AD4D4] transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
