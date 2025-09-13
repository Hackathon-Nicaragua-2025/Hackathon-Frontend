// Import For Custom Links
import CustomLinks from "./CustomLinks";
// Import For React Icons
import { FaHome } from "react-icons/fa";
import { FaCalendar, FaGraduationCap, FaTicket, FaUsers } from "react-icons/fa6";
// Import For Style
import "./nav/nav.sass";

// Component Nav
export default function NavIcons() {
  return (
    <div className="sticky bottom-0 flex justify-center gap-8 w-full p-4 bg-white">
      <CustomLinks reference="/" className="text-2xl font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" icon={<FaHome />} />
      <CustomLinks reference="/events" className="text-2xl font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" icon={<FaCalendar />} />
      <CustomLinks reference="/education" className="text-2xl font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" icon={<FaGraduationCap />} />
      <CustomLinks reference="/reservations" className="text-2xl font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" disabled icon={<FaTicket />} />
      <CustomLinks reference="/community" className="text-2xl font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" disabled icon={<FaUsers />} />
    </div>
  );
}