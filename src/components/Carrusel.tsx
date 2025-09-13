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
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
  };
}

// Component Carrusel
export default function Carrusel({ elements, className, settings }: CarouselProps) {
  return (
    <div className={className}>
      <Slider {...settings}>
        {elements.map((element, index) => (
          <div className="cursor-pointer px-8 hover:scale-125 transition duration-500 ease-in-out" key={index}>
            {element}
          </div>
        ))}
      </Slider>
    </div>
  );
}