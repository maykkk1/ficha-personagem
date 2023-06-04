import { Component, Input, OnInit } from '@angular/core';
import { Arma } from '../arma.model';
import { faArrowDown, faArrowUp, faCoffee, faCoins, faDice, faDiceD20, faWeight, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { ArmasService } from '../armas.service';

@Component({
  selector: 'app-arma',
  templateUrl: './arma.component.html',
  styleUrls: ['./arma.component.css']
})
export class ArmaComponent implements OnInit {
  @Input() arma: Arma;
  faCoins = faCoins;
  faWeightHanging = faWeightHanging;
  faDiceD20 = faDiceD20;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(private armasService: ArmasService) { }

  ngOnInit(): void {
  }

  adicionar(){
    this.armasService.adicionarUnidade(this.arma.nome);
  }

  diminuir(){
    this.armasService.removerUnidade(this.arma.nome);
  }

}
