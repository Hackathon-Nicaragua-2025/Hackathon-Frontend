// Import For React Icons
import { FaGoogle, FaInstagram, FaTwitter, FaFacebook, FaTiktok } from "react-icons/fa6";
// Import For Components
import CustomLinks from "./CustomLinks";

// Component Redes
export default function Redes() {
  return (
    <div className="mb-8">
      {/* Title */}
      <h2 className="text-sm font-bold">Contactanos en nuestras redes sociales</h2>
      {/* Links */}
      <ul className="flex justify-center gap-8 mt-4 text-base">
        <CustomLinks reference="mailto:avifyhackathon@gmail.com" target="_blank" icon={<FaGoogle />} className="hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out" />
        <CustomLinks reference="" target="_blank" icon={<FaFacebook />} className="hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out" />
        <CustomLinks reference="" target="_blank" icon={<FaTwitter />} className="hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out" />
        <CustomLinks reference="" target="_blank" icon={<FaTiktok />} className="hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out" />
        <CustomLinks reference="" target="_blank" icon={<FaInstagram />} className="hover:text-[#3F6C5E] hover:scale-125 transition duration-500 ease-in-out" />
      </ul>
    </div>
  );
}

