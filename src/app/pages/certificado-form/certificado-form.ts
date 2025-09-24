import { Component } from '@angular/core';
import {SecondaryButton} from '../../_components/secondary-button/secondary-button';
import {PrimaryButton} from '../../_components/primary-button/primary-button';
import {FormsModule, NgModel} from '@angular/forms';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButton,
    PrimaryButton,
    FormsModule,
    NgStyle,
    NgClass
  ],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome : string = '';
  atividade : string = '';
  atividades : string[] = ['Palestra', 'Curso', 'Workshop', 'Seminário', 'Congresso', 'Simpósio', 'Fórum', 'Mesa Redonda', 'Outros'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }
}
