// Import For Custom Links
import CustomLinks from "../CustomLinks";
// Import For Style
import "./nav.sass";

// Component Nav
export default function Nav() {
  return (
    <div className="flex justify-center gap-8">
      <CustomLinks reference="/" className="text-lg font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" label="Inicio" />
      <CustomLinks reference="/events" className="text-lg font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" label="Eventos" />
      <CustomLinks reference="/education" className="text-lg font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" label="Educación" />
      <CustomLinks reference="/reservations" className="text-lg font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" disabled label="Reservas" />
      <CustomLinks reference="/community" className="text-lg font-bold text-[#0D3C2F] hover:text-[#3F6C5E] hover:underline transition duration-500 ease-in-out" disabled label="Comunidad" />
    </div>
  );
}