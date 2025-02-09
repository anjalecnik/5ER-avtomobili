import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ILogo } from "~/types/interfaces/ILogo";

interface ILogoCarousel {
  logos: ILogo[];
}

export default function LogoCarousel({ logos }: ILogoCarousel) {
  return (
    <div className="mx-auto px-4 py-6">
      <div className="block md:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          centerMode
          swipeable
          emulateTouch
          useKeyboardArrows
          interval={3000}
          transitionTime={500}
          centerSlidePercentage={33}
        >
          {[...logos, ...logos.slice(0, 2)].map((logo, index) => (
            <div key={index} className="p-2 flex justify-center">
              <div className="w-[120px] h-[120px] border rounded-lg shadow-md flex items-center justify-center bg-white">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[80px] object-contain"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="hidden md:block">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          centerMode
          swipeable={false}
          emulateTouch={false}
          interval={3000}
          transitionTime={500}
          centerSlidePercentage={20}
        >
          {[...logos, ...logos.slice(0, 2)].map((logo, index) => (
            <div key={index} className="p-2 flex justify-center">
              <div className="w-[120px] h-[120px] border rounded-lg shadow-md flex items-center justify-center bg-white">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[80px] object-contain"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
