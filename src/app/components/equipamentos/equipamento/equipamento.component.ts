import { Component, Input, OnInit } from '@angular/core';
import { Equipamento } from '../equipamento.model';
import { faArrowDown, faArrowUp, faCoins, faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { EquipamentosService } from '../equipamento.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.css']
})
export class EquipamentoComponent implements OnInit {
  @Input() equipamento: Equipamento;

  faCoins = faCoins;
  faWeightHanging = faWeightHanging;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(private equipamentosService: EquipamentosService) { }

  ngOnInit(): void {
  }

  adicionar(){
    this.equipamentosService.adicionarUnidade(this.equipamento.nome);
  }

  diminuir(){
    this.equipamentosService.removerUnidade(this.equipamento.nome);
  }

}
