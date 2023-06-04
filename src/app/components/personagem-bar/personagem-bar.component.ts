import { Component, OnInit } from '@angular/core';
import { faTheaterMasks, faUserNinja } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personagem-bar',
  templateUrl: './personagem-bar.component.html',
  styleUrls: ['./personagem-bar.component.css']
})
export class PersonagemBarComponent implements OnInit {
  alinhamentoIcon = faTheaterMasks

  constructor() { }

  ngOnInit(): void {
  }

}
