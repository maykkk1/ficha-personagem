import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habilidade } from '../habilidade.model';
import { HabilidadeService } from '../habilidades.service';

@Component({
  selector: 'app-habilidade',
  templateUrl: './habilidade.component.html',
  styleUrls: ['./habilidade.component.css']
})
export class HabilidadeComponent implements OnInit {
  @Input() habilidade: Habilidade;
  @Output() editar = new EventEmitter<number>();

  constructor(private habilidadesService: HabilidadeService) { }

  ngOnInit(): void {
  }

  excluir(){
    this.habilidadesService.excluirHabilidade(this.habilidade.id);
  }

  editarHabilidade(){
    this.habilidadesService.editionMode = true;
    this.editar.emit(this.habilidade.id);
  }

}
