import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChipComponent,
  ChipIconContentComponent,
  ChipLabelComponent,
  ChipLabelContentComponent,
} from '../../../../components/chip';
import { SvgIconComponent } from '../../../../components/svg-icon';

@Component({
  selector: 'app-estate-list-item-room-tag',
  standalone: true,
  imports: [
    CommonModule,
    ChipComponent,
    ChipLabelComponent,
    ChipIconContentComponent,
    ChipLabelContentComponent,
    SvgIconComponent,
  ],
  templateUrl: './room-tag.component.html',
  styleUrl: './room-tag.component.scss',
})
export class RoomTagComponent implements OnInit {
  @Input({ required: true })
  type: 'bedroom' | 'bathroom' = 'bedroom';

  @Input({ required: true })
  quantity: number = 0;

  readonly iconByType = {
    bedroom: { iconSrc: 'assets/bed.svg#bed', iconTitle: 'bed icon' },
    bathroom: { iconSrc: 'assets/bath.svg#bath', iconTitle: 'bath icon' },
  } as const;

  icon = this.iconByType[this.type];

  ngOnInit(): void {
    this.icon = this.iconByType[this.type];
  }
}
