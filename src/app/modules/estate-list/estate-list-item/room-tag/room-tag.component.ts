import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../../../../components/typography';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estate-list-item-room-tag',
  standalone: true,
  imports: [TypographyComponent, CommonModule],
  templateUrl: './room-tag.component.html',
  styleUrl: './room-tag.component.scss',
})
export class RoomTagComponent {
  @Input()
  type: 'bedroom' | 'bathroom' | undefined;

  @Input()
  quantity: number | undefined;
}
