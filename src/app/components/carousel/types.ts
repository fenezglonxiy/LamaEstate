export type CarouselItemMetadata = {
  index: number;
  caption: string;
};

export type AnimateCaptionFn = (
  currentItem: CarouselItemMetadata,
  gsap: GSAP
) => void;

export type AnimateCounterFn = (
  currentItem: CarouselItemMetadata,
  gsap: GSAP
) => void;

export type AnimateCarouselItemFn = (
  currentItem: CarouselItemMetadata,
  direction: 'left' | 'right',
  gsap: GSAP
) => void;
