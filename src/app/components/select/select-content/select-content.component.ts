import { Component, inject, Input, OnInit } from '@angular/core';
import { PaperComponent } from '../../paper/paper.component';
import { FormFieldService } from '../../form';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectControlComponent } from '../select-control/select-control.component';
import { SelectContentDirective } from './select-content.directive';

@Component({
  selector: 'app-select-content',
  standalone: true,
  imports: [PaperComponent, ReactiveFormsModule, SelectControlComponent],
  templateUrl: './select-content.component.html',
  styleUrl: './select-content.component.scss',
  hostDirectives: [SelectContentDirective],
})
export class SelectContentComponent implements OnInit {
  private _formFieldService = inject(FormFieldService);

  control!: FormControl;

  @Input()
  elevation: PaperComponent['elevation'] = 2;

  ngOnInit(): void {
    this.control = this._formFieldService.control as NonNullable<FormControl>;
  }
}
