import {
  AfterViewInit,
  Component,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PortableService } from '../portable.service';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss',
})
export class PortalComponent implements AfterViewInit {
  portableService = inject(PortableService);

  @ViewChild('portableContent', { read: ViewContainerRef, static: true })
  portableContentVcr: ViewContainerRef | null = null;

  ngAfterViewInit(): void {
    if (this.portableContentVcr !== null) {
      this.portableService.setPortalVcr(this.portableContentVcr);
    }
  }
}
