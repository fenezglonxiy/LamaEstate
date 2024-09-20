import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-root-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.scss',
})
export class RootLayoutComponent {}
