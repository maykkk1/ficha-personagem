import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTheaterMasks, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PersonagemService } from 'src/app/personagem-service';
import { Personagem } from 'src/personagem.model';

@Component({
  selector: 'app-personagem-bar',
  templateUrl: './personagem-bar.component.html',
  styleUrls: ['./personagem-bar.component.css']
})
export class PersonagemBarComponent implements OnInit, OnDestroy {
  personagem: Personagem;
  alinhamentoIcon = faTheaterMasks
  personagem$Sub: Subscription;

  constructor(private personagemService: PersonagemService) { }

  ngOnInit(): void {
    this.personagem = this.personagemService.getPersonagem();

    this.personagem$Sub = this.personagemService.personagemChange.subscribe(data => {
      this.personagem = data;
    })
  }

  getXpPorcentagem(){
    return  (this.personagem.xp / this.personagem.xpParaUpar) * 100;
  }

  getVidaPorcentagem(){
    return  (this.personagem.vida / this.personagem.vidaMaxima) * 100;
  }


  ngOnDestroy(): void {
    this.personagem$Sub.unsubscribe();
  }

}
