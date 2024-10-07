import {
  AfterViewInit,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PopoverService } from '../popover.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover-content.component.html',
  styleUrl: './popover-content.component.scss',
})
export class PopoverContentComponent implements AfterViewInit {
  popoverService = inject(PopoverService);

  @ViewChild('tmplContent', { static: true })
  tmplContent: TemplateRef<any> | null = null;

  ngAfterViewInit(): void {
    if (this.tmplContent !== null) {
      this.popoverService.registerContent(this.tmplContent);
    }
  }
}
