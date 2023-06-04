import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArmasService } from './armas.service';
import { Subscription } from 'rxjs';
import { Arma } from './arma.model';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit, OnDestroy {
  showEdit: boolean = false;
  armas$Subscrition: Subscription;
  bolsaDeArmas: Arma[];

  constructor(private armasService: ArmasService) { }

  ngOnInit(): void {
    this.armasService.sincronizarBolsaDeArmas();
    this.bolsaDeArmas = this.armasService.getBolsaDeArmas();

    this.armas$Subscrition = this.armasService.armasChange.subscribe(data => {
      this.bolsaDeArmas = data;
    });
  }

  visible(){
    this.showEdit = !this.showEdit;
  }

  ngOnDestroy(): void {
    this.armas$Subscrition.unsubscribe();
  }

}
