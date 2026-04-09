import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-dashed border-stone-800 bg-black">
      <div className="mx-4">
        <div className="max-w-6xl mx-auto py-10 md:py-20 lg:py-30 px-4 sm:px-6 border-x border-dashed border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Fizora.</h2>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/fizoraaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://x.com/beast2838"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://github.com/Fizora/my-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/moch-choirul-faiz-9ba4282a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@fizoraaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTiktok size={22} />
              </a>
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
