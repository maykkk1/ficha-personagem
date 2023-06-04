import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PersonagemService } from 'src/app/personagem-service';
import { Personagem } from 'src/personagem.model';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent implements OnInit, OnDestroy {
  faCoins = faCoins
  personagem: Personagem;
  personagem$Sub: Subscription;

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.personagem = this.personagemService.getPersonagem();

    this.personagem$Sub = this.personagemService.personagemChange.subscribe(data => {
      this.personagem = data;
    })
  }

  ngOnDestroy(): void {
    this.personagem$Sub.unsubscribe();
  }

}
