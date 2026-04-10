import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import TargetCursor from "./TargetCursor";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/fizoraaa/",
      icon: <FaInstagram size={22} />,
      label: "Instagram",
    },
    {
      href: "https://x.com/beast2838",
      icon: <BsTwitterX size={22} />,
      label: "Twitter",
    },
    {
      href: "https://github.com/Fizora/my-profile",
      icon: <FaGithub size={22} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/moch-choirul-faiz-9ba4282a2/",
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.tiktok.com/@fizoraaa",
      icon: <FaTiktok size={22} />,
      label: "TikTok",
    },
  ];

  return (
    <footer className="border-t border-dashed border-stone-800 bg-black">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 lg:py-30 px-4 sm:px-6 border-x border-dashed border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-white font-mono">Fizora.</h2>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 cursor-target cursor-pointer text-gray-400 hover:text-white transition"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Fizora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
