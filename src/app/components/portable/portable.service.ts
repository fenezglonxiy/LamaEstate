import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  effect,
  EmbeddedViewRef,
  Injectable,
  signal,
  ViewContainerRef,
} from '@angular/core';
import { AppComponent } from '../../app.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { EmbeddedViewParams } from '../../../types';

@Injectable()
export class PortableService {
  private _rootVcr: ViewContainerRef;

  private _portalVcr: ViewContainerRef | null = null;

  private _$contentShowed = signal(false);

  private _contentMetadata: EmbeddedViewParams<any> | null = null;

  private _overlay: ComponentRef<OverlayComponent> | null = null;

  private _content: EmbeddedViewRef<any> | null = null;

  constructor(private _appRef: ApplicationRef) {
    this._rootVcr = (this._appRef.components[0].instance as AppComponent).vcr;
  }

  setPortalVcr(portalVcr: ViewContainerRef) {
    this._portalVcr = portalVcr;
  }

  registerContent<C>(
    { templateRef, context, options }: EmbeddedViewParams<C>,
    overlayed?: boolean
  ) {
    this._contentMetadata = {
      templateRef,
      context,
      options,
    };

    if (overlayed) {
      const environmentInjector = this._appRef.injector;
      this._overlay = createComponent(OverlayComponent, {
        environmentInjector,
      });
      this._overlay.instance.handleClick = this._handleClickOverlay.bind(this);
    }

    effect(
      () => {
        if (this._$contentShowed()) {
          this._attachOverlay();
          this._attachContent();
        } else {
          this._detachOverlay();
          this._detachContent();
        }
      },
      { injector: this._appRef.injector }
    );
  }

  toggleContent() {
    this._$contentShowed.update((val: boolean) => !val);
  }

  private _attachContent() {
    if (this._contentMetadata === null) {
      return;
    }

    document.body.classList.add('no-scroll');
    const vcr = this._portalVcr !== null ? this._portalVcr : this._rootVcr;

    if (this._content === null) {
      this._content = vcr.createEmbeddedView(
        this._contentMetadata.templateRef,
        this._contentMetadata.context,
        this._contentMetadata.options
      );

      return;
    }

    vcr.insert(this._content);
  }

  private _detachContent() {
    if (this._content === null) {
      return;
    }

    document.body.classList.remove('no-scroll');
    const vcr = this._portalVcr !== null ? this._portalVcr : this._rootVcr;
    const index = vcr.indexOf(this._content);

    if (index >= 0) {
      vcr.detach(index);
    }
  }

  private _attachOverlay() {
    if (this._overlay !== null) {
      this._rootVcr.insert(this._overlay.hostView);
    }
  }

  private _detachOverlay() {
    if (this._overlay !== null) {
      const index = this._rootVcr.indexOf(this._overlay.hostView);

      if (index >= 0) {
        this._rootVcr.detach(index);
      }
    }
  }

  private _handleClickOverlay() {
    this._$contentShowed.set(false);
  }
}
