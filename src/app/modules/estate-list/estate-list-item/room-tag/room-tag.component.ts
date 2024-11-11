import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChipComponent,
  ChipIconComponent,
  ChipIconContentComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../../components/chip';

@Component({
  selector: 'app-estate-list-item-room-tag',
  standalone: true,
  imports: [
    CommonModule,
    ChipComponent,
    ChipIconComponent,
    ChipLabelComponent,
    ChipIconContentComponent,
    ChipLabelContentComponent,
  ],
  templateUrl: './room-tag.component.html',
  styleUrl: './room-tag.component.scss',
})
export class RoomTagComponent {
  @Input()
  type: 'bedroom' | 'bathroom' | undefined;

  @Input()
  quantity: number | undefined;
}
