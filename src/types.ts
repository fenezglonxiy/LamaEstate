import { Injector, TemplateRef } from '@angular/core';

export type EmbeddedViewParams<C> = {
  templateRef: TemplateRef<C>;
  context?: C;
  options?: { index?: number; injector?: Injector };
};
