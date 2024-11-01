import {
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
} from '@angular/core';
import { EstateLocationMapPopupComponent } from './estate-location-map-popup.component';

@Injectable()
export class EstateLocationMapPopupService {
  private _injector = inject(EnvironmentInjector);
  private _applicationRef = inject(ApplicationRef);

  createPopup(
    estateId: EstateLocationMapPopupComponent['estateId'],
    estateThumbnailSrc: EstateLocationMapPopupComponent['estateThumbnailSrc'],
    estateThumbnailAlt: EstateLocationMapPopupComponent['estateThumbnailAlt'],
    estateName: EstateLocationMapPopupComponent['estateName'],
    estatePrice: EstateLocationMapPopupComponent['estatePrice'],
    estateBedroomQuantity: EstateLocationMapPopupComponent['estateBedroomQuantity']
  ) {
    const popup = document.createElement('estate-location-map-popup-component');

    const popupComponentRef = createComponent(EstateLocationMapPopupComponent, {
      environmentInjector: this._injector,
      hostElement: popup,
    });

    this._applicationRef.attachView(popupComponentRef.hostView);

    popupComponentRef.instance.estateId = estateId;
    popupComponentRef.instance.estateThumbnailSrc = estateThumbnailSrc;
    popupComponentRef.instance.estateThumbnailAlt = estateThumbnailAlt;
    popupComponentRef.instance.estateName = estateName;
    popupComponentRef.instance.estatePrice = estatePrice;
    popupComponentRef.instance.estateBedroomQuantity = estateBedroomQuantity;

    return popup;
  }
}
