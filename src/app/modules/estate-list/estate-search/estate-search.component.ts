import { Component, inject } from '@angular/core';
import { TypographyComponent } from '../../../components/typography';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../components/button';
import {
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
} from '../../../components/form';
import { InputComponent } from '../../../components/input';
import { CommonModule } from '@angular/common';
import {
  SelectComponent,
  SelectContentComponent,
  SelectContentRegistratorComponent,
  SelectItemComponent,
  SelectTriggerComponent,
  SelectValueComponent,
} from '../../../components/select';

@Component({
  selector: 'app-estate-list-estate-search',
  standalone: true,
  imports: [
    TypographyComponent,
    ButtonComponent,
    FormFieldComponent,
    ReactiveFormsModule,
    FormItemComponent,
    FormLabelComponent,
    FormControlComponent,
    InputComponent,
    CommonModule,
    SelectComponent,
    SelectTriggerComponent,
    SelectValueComponent,
    SelectContentRegistratorComponent,
    SelectContentComponent,
    SelectItemComponent,
  ],
  templateUrl: './estate-search.component.html',
  styleUrl: './estate-search.component.scss',
})
export class EstateSearchComponent {
  fb = inject(FormBuilder);

  estateSearchFormGroupModel = this.fb.nonNullable.group({
    location: this.fb.control(''),
    type: this.fb.nonNullable.control<'any' | 'buy' | 'rent'>('any'),
    property: this.fb.nonNullable.control<
      'any' | 'apartment' | 'house' | 'condo' | 'land'
    >('any'),
    bedroom: this.fb.control<number | undefined>(undefined),
    minPrice: this.fb.control<number | undefined>(undefined),
    maxPrice: this.fb.control<number | undefined>(undefined),
  });

  readonly estateSearchForm = [
    {
      control: this.estateSearchFormGroupModel.controls.location,
      className: 'form-field-location',
      model: 'input',
      label: 'Location',
      type: 'text' as const,
      placeholder: 'City Location',
    },
    {
      control: this.estateSearchFormGroupModel.controls.type,
      className: 'form-field-type',
      model: 'select',
      label: 'Type',
      options: [
        {
          value: 'any',
          label: 'Any',
        },
        {
          value: 'buy',
          label: 'Buy',
        },
        {
          value: 'rent',
          label: 'Rent',
        },
      ],
      placeholder: 'Any',
    },
    {
      control: this.estateSearchFormGroupModel.controls.property,
      className: 'form-field-property',
      model: 'select',
      label: 'Property',
      options: [
        {
          value: 'any',
          label: 'Any',
        },
        {
          value: 'apartment',
          label: 'Apartment',
        },
        {
          value: 'House',
          label: 'house',
        },
        {
          value: 'condo',
          label: 'Condo',
        },
        {
          value: 'land',
          label: 'Land',
        },
      ],
      placeholder: 'Any',
      wFixed: true,
    },
    {
      control: this.estateSearchFormGroupModel.controls.bedroom,
      className: 'form-field-bedroom',
      model: 'input',
      label: 'Bedroom',
      type: 'number' as const,
      placeholder: 'Any',
    },
    {
      control: this.estateSearchFormGroupModel.controls.minPrice,
      className: 'form-field-min-price',
      model: 'input',
      label: 'Min Price',
      type: 'number' as const,
      placeholder: 'Any',
    },
    {
      control: this.estateSearchFormGroupModel.controls.maxPrice,
      className: 'form-field-max-price',
      model: 'input',
      label: 'Max Price',
      type: 'number' as const,
      placeholder: 'Any',
    },
  ];

  handleSubmit() {
    console.log(this.estateSearchFormGroupModel.value);
  }
}
