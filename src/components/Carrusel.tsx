// Import For React Slick
import Slider from "react-slick";
// Import For React Slick Styles 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interface Carousel Props
interface CarouselProps {
  elements: React.ReactNode[];
  className?: string;
  settings: {
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    initialSlide: number,
    rtl?: boolean,
    responsive?: {
      breakpoint: number;
      settings: {
        slidesToShow: number;
        slidesToScroll: number;
      };
    }[];
  };
}

// Component Carrusel
export default function Carrusel({ elements, className, settings }: CarouselProps) {
  return (
    <div className={className}>
      {/* Force re-init when settings impacting layout change */}
      <Slider key={`${settings.slidesToShow}-${settings.slidesToScroll}`} {...settings}>
        {elements.map((element, index) => (
          <div
            className="cursor-pointer px-3 sm:px-4 md:px-6 transition duration-500 ease-in-out hover:scale-105 lg:px-8"
            key={index}
          >
            {element}
          </div>
        ))}
      </Slider>
    </div>
  );
}