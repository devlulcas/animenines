import useEmblaCarousel from "embla-carousel-react";
import css from "./carousel.module.css";

type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={css.embla} ref={emblaRef}>
      <div className={css.emblaContainer}>{children}</div>
    </div>
  );
}

export function Slide({ children }: CarouselProps) {
  return <div className={css.emblaSlide}>{children}</div>;
}
