import {
  ApplicationRef,
  Component,
  EmbeddedViewRef,
  inject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  MasonryComponent,
  MasonryItemComponent,
} from '../../../../components/masonry';
import {
  CarouselComponent,
  CarouselContentComponent,
  CarouselCounterComponent,
  CarouselImageComponent,
  CarouselItemComponent,
  CarouselPreviewComponent,
  CarouselPreviewImageComponent,
  CarouselPreviewItemComponent,
} from '../../../../components/carousel';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-estate-preview-showcase',
  standalone: true,
  imports: [
    MasonryComponent,
    MasonryItemComponent,
    CarouselComponent,
    CarouselContentComponent,
    CarouselItemComponent,
    CarouselImageComponent,
    CarouselCounterComponent,
    CarouselPreviewComponent,
    CarouselPreviewItemComponent,
    CarouselPreviewImageComponent,
  ],
  templateUrl: './estate-preview-showcase.component.html',
  styleUrl: './estate-preview-showcase.component.scss',
})
export class EstatePreviewShowcaseComponent {
  heights = [150, 30, 90, 70, 110, 150, 130, 80];

  @ViewChild('tmplCarousel', { read: TemplateRef, static: true })
  private _carousel!: TemplateRef<any>;

  private _carouselViewRef: EmbeddedViewRef<any> | undefined;

  private _applicationRef = inject(ApplicationRef);

  private _rootVcr: ViewContainerRef;

  constructor() {
    const appComponent = this._applicationRef.components[0]
      .instance as AppComponent;
    this._rootVcr = appComponent.vcr;
  }

  openCarousel() {
    document.body.classList.add('no-scroll');

    if (!this._carouselViewRef) {
      this._carouselViewRef = this._rootVcr.createEmbeddedView(this._carousel);
      return;
    }

    this._rootVcr.insert(this._carouselViewRef);
  }

  closeCarousel() {
    if (!this._carouselViewRef) {
      return;
    }

    document.body.classList.remove('no-scroll');
    const index = this._rootVcr.indexOf(this._carouselViewRef);
    this._rootVcr.detach(index);
  }
}
