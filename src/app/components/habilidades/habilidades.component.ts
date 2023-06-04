import { Component, OnDestroy, OnInit } from '@angular/core';
import { HabilidadeService } from './habilidades.service';
import { Habilidade } from './habilidade.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit, OnDestroy {
  showEdit: boolean = false;
  idEdit: number;
  habilidades: Habilidade[];
  habilidades$Subscription: Subscription;

  constructor(private habilidadesService: HabilidadeService) { }

  ngOnInit(): void {
    this.habilidadesService.sincronizarHabilidades();
    this.habilidades = this.habilidadesService.getHabilidades().data;

    this.habilidadesService.habilidadesChange.subscribe(data => {
      this.habilidades = data;
    });
  }

  visible(){
    this.showEdit = !this.showEdit;
  }

  editar(id: number){
    this.idEdit = id;
    this.visible();
  }

  ngOnDestroy(): void {
    this.habilidades$Subscription.unsubscribe();
  }

}
