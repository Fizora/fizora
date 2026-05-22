import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/fizoraaa/",
      icon: <FaInstagram size={22} />,
      label: "Instagram",
      title: "Follow on Instagram",
    },
    {
      href: "https://x.com/beast2838",
      icon: <BsTwitterX size={22} />,
      label: "Twitter",
      title: "Follow on X (Twitter)",
    },
    {
      href: "https://github.com/Fizora/my-profile",
      icon: <FaGithub size={22} />,
      label: "GitHub",
      title: "View GitHub profile",
    },
    {
      href: "https://www.linkedin.com/in/moch-choirul-faiz-9ba4282a2/",
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
      title: "Connect on LinkedIn",
    },
    {
      href: "https://www.tiktok.com/@fizoraaa",
      icon: <FaTiktok size={22} />,
      label: "TikTok",
      title: "Follow on TikTok",
    },
  ];

  return (
    <footer className="border-t border-dashed border-stone-800 bg-black">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-16 px-4 sm:px-6 border-x border-dashed border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <h2 className="text-2xl font-bold text-white font-mono tracking-tight">
              Fizora<span className="text-gray-500">.</span>
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm font-mono">
              © {new Date().getFullYear()} Fizora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
