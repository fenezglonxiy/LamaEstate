export type EstateLocationMapPopupInputs = {
  estateId: string;
  estateThumbnailSrc: string;
  estateThumbnailAlt?: string;
  estateName: string;
  estatePrice: number;
  estateBedroomQuantity: number;
};

export type EstateLocation = EstateLocationMapPopupInputs & {
  estateId: string;
  latitude: number;
  longitude: number;
};
