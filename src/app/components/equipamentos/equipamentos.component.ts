import { Component, OnDestroy, OnInit } from '@angular/core';
import { EquipamentosService } from './equipamento.service';
import { Equipamento } from './equipamento.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit, OnDestroy {
  showEdit: boolean = false;
  listaDeEquipamentos: Equipamento[];
  equipamentos$Subscription: Subscription;

  constructor(private equipamentosService: EquipamentosService) { }

  ngOnInit(): void {
    this.equipamentosService.sincronizarEquipamentos();
    this.listaDeEquipamentos = this.equipamentosService.getEquipamentos();

    this.equipamentos$Subscription = this.equipamentosService.equipamentosChange.subscribe(data => {
      this.listaDeEquipamentos = data;
    })
  }

  visible(){
    this.showEdit = !this.showEdit;
  }

  ngOnDestroy(): void {
    this.equipamentos$Subscription.unsubscribe();
  }

}
