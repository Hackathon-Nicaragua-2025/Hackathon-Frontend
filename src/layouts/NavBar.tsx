// Import For Hooks
import useMediaQuery from "../hooks/mediaScreen";
// Import For Components
import Button from "../components/Button";
import Nav from "../components/nav/Nav";
// Import For Assets
import IconoNormal from "../assets/image/IconoNormal.svg";

// Component NavBar
export default function NavBar() {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    // Container
    <div className="sticky top-0 z-50 flex justify-between items-center w-full py-4 px-6 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src={IconoNormal} alt="Icono Avify" className="w-12" />
        <h1 className="ml-2 font-bold text-xl">Avify</h1>
      </div>
      {/* Nav */}
      {isTablet ? '' : <Nav />}
      {/* Login Button */}
      <Button
        label="Iniciar Sesión"
        className="cursor-pointer px-4 py-1 rounded-2xl text-sm bg-black text-white hover:bg-[#3F6C5E] transition duration-500 ease-in-out"
        rol={false}
        onClick={() => { }}
      />
    </div>
  )
}