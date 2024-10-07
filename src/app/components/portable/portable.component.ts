import { Component } from '@angular/core';
import { PortableService } from './portable.service';

@Component({
  selector: 'app-portable',
  standalone: true,
  imports: [],
  templateUrl: './portable.component.html',
  styleUrl: './portable.component.scss',
  providers: [PortableService],
})
export class PortableComponent {}
