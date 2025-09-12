import { Component, signal } from '@angular/core';
import {Navbar} from './_components/navbar/navbar';
import {PrimaryButton} from './_components/primary-button/primary-button';
import {SecondaryButton} from './_components/secondary-button/secondary-button';
import {ItemCertificado} from './_components/item-certificado/item-certificado';
import {BaseUi} from './_components/base-ui/base-ui';

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecondaryButton, ItemCertificado, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngHelloWordAngular');
  showNavBar: boolean = true;
}
