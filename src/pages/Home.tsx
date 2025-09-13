// Import For Layouts
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
// Import For Components
import Carrusel from "../components/Carrusel";
// Import For Assets
import GridAves from "../assets/image/GridAves.png";
import LogoNegativo from "../assets/image/LogoNegativo.svg";
import MiniMagic from "../assets/image/MiniMagic.png";
import Senderismo from "../assets/image/Senderismo.png";
import NavIcons from "../components/NavIcons";
import useMediaQuery from "../hooks/mediaScreen";

// Settings Aves
const settingsAves = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
} as const;

// Settings Reservas
const settingsReservas = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  rtl: true,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
} as const;

// Elements 
const elements = [
  <div className="h-48 rounded-xl flex items-center justify-center bg-orange-400 text-black font-bold">1</div>,
  <div className="h-48 rounded-xl flex items-center justify-center bg-orange-400 text-black font-bold">2</div>,
  <div className="h-48 rounded-xl flex items-center justify-center bg-orange-400 text-black font-bold">3</div>,
  <div className="h-48 rounded-xl flex items-center justify-center bg-orange-400 text-black font-bold">4</div>,
  <div className="h-48 rounded-xl flex items-center justify-center bg-orange-400 text-black font-bold">5</div>,
  <div className="h-48 rounded-xl flex items-center justify-center bg-orange-400 text-black font-bold">6</div>,
];

// Component Home
export default function Home() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {/* Nav Bar */}
      <NavBar />
      {/* Grid Aves */}
      <div className="relative">
        <img src={GridAves} alt="Grid Aves" className="w-full brightness-30" />
        <img src={LogoNegativo} alt="Logo Avify" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4" />
      </div>
      {/* Title */}
      <div>
        <h2 className="m-4 text-sm text-center md:m-8">
          Protegiendo las aves, cuidando la naturaleza. <br />
          Descubre, Aprende y Visita con responsabilidad. <br />
          <span className="font-bold">Naturaleza en Acción, ¡Se Parte Del Cambio!</span>
        </h2>
        {/* Text */}
        <div className="flex items-center gap-8 mt-10 mx-4 md:mx-8 md:gap-16">
          <div className="w-2/3 md:w-1/2">
            <p className="text-xs">
              Somos una comunidad dedicada a la conservation de aves y reservas naturales. Aquí encontraras información para aprender, cuidar y disfrutar de la naturaleza de forma segura.
            </p>
            <p className="mt-4 text-xs">
              Trabajamos para resguardar la riqueza avifaunistica de Nicaragua mediante programas de conservacion y monitoreo. Nuestro compromiso es preservar las especies en peligro, proteger sus habitas naturales y promover la reproduccion segura de las aves nativas y migratorias.
            </p>
          </div>
          <div className="w-1/3 md:w-1/2">
            <img src={MiniMagic} alt="Mini Magic" className="w-2/3" />
          </div>
        </div>
        {/* Text */}
        <div className="flex items-center gap-8 mx-4 mt-10 md:mx-8 md:gap-16">
          <img src={Senderismo} alt="Senderismo" className="w-1/3 md:w-1/2" />
          <p className="text-xs">
            Invitamos a los visitantes a disfrutar de la naturaleza de forma responsable. Fomentamos el turismo ecológico con practicas seguras y respetuosas: Mantener el silencio, no dejar basura, seguir senderos establecidos y valorar cada espacio como patrimonio nacional.
          </p>
        </div>
      </div>
      {/* Carrusel */}
      <div className="mt-16 md:mt-24">
        <div>
          <h2 className="font-bold text-center text-base mb-6 md:text-lg">Aves de Nicaragua.</h2>
          <Carrusel elements={elements} settings={settingsAves} />
        </div>
        <div>
          <h2 className="font-bold text-center text-base mt-16 mb-6 md:text-lg">Reservas Naturales.</h2>
          <Carrusel elements={elements} settings={settingsReservas} />
        </div>
      </div>
      <p className="my-14 mx-8 italic font-light font-serif text-center text-sm text-[#0D3C2F] md:text-base md:mx-16 md:my-24 md:font-semibold">
        Con Avify, aprenderás que pequeños cambios generan un gran impacto. Desde respetar las reservas hasta apoyar iniciativas de conservación. Queremos inspirar a niños, jóvenes y adultos a convertirse en defensores de la biodiversidad y defensores activos de nuestro planeta.
      </p>
      {/* Footer */}
      <Footer />
      {/* Nav Icons */}
      {isMobile ? <NavIcons /> : ''}
    </>
  );
}