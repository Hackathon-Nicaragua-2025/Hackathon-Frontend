// Import For Components
import CustomLinks from "../components/CustomLinks";
// Import For Assets
import LogoNormal from "../assets/image/LogoNormal.svg";
import Redes from "../components/Redes";

// Component Footer
export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-8 bg-[#99B8B1]">
      <div className="mb-4">
      {/* Logo */}
        <img src={LogoNormal} alt="Icono Avify" className="w-14" />
      </div>
      {/* Redes */}
      <Redes />
      {/* Links */}
      <div className="flex flex-col gap-2 mb-6 text-sm text-center">
        <CustomLinks reference="/privacy" label="Política y Privacidad" />
        <CustomLinks reference="/conditions" label="Condiciones y Términos" />
      </div>
      {/* Copyright */}
      <p className="text-xs font-light text-[#0D3C2F]">
        &copy; Avify {new Date().getFullYear()} - Todos los derechos reservados.
      </p>
    </footer>
  );
} 