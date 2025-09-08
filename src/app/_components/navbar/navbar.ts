import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  ngOnInit() {
    this.mensagem();
  }

  mensagem() {
    console.log('componente nav bar iniciado com sucesso via function!');
  }
}
