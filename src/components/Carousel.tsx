import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Carousel as CarouselLib,
} from "react-responsive-carousel";

const Carousel = (props: any) => {
  return (
    <CarouselLib
      {...props}
      renderArrowNext={() => null}
      renderArrowPrev={() => null}
      showIndicators={false}
    />
  );
};

export default Carousel;
