import {
  ApplicationRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { AppComponent } from '../../app.component';

@Injectable()
export class PortableService {
  private _rootVcr: ViewContainerRef;

  private _portalVcr: ViewContainerRef | null = null;

  constructor(appRef: ApplicationRef) {
    this._rootVcr = (appRef.components[0].instance as AppComponent).vcr;
  }

  setPortalVcr(portalVcr: ViewContainerRef) {
    this._portalVcr = portalVcr;
  }

  attachTemplate<C>(
    templateRef: TemplateRef<C>,
    context?: C,
    options?: { index?: number; injector?: Injector }
  ): EmbeddedViewRef<C> {
    if (this._portalVcr !== null) {
      return this._portalVcr.createEmbeddedView(templateRef, context, options);
    }

    return this._rootVcr.createEmbeddedView(templateRef, context, options);
  }

  detachTemplate(index?: number): ViewRef | null {
    if (this._portalVcr !== null) {
      return this._portalVcr.detach(index);
    }

    return this._rootVcr.detach(index);
  }
}
