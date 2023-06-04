import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HabilidadeComponent } from './components/habilidades/habilidade/habilidade.component';
import { HabilidadeEditComponent } from './components/habilidades/habilidade-edit/habilidade-edit.component';
import { ArmasComponent } from './components/armas/armas.component';
import { ArmaEditComponent } from './components/armas/arma-edit/arma-edit.component';
import { ArmaComponent } from './components/armas/arma/arma.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EquipamentosComponent } from './components/equipamentos/equipamentos.component';
import { EquipamentoComponent } from './components/equipamentos/equipamento/equipamento.component';
import { EquipamentoEditComponent } from './components/equipamentos/equipamento-edit/equipamento-edit.component';
import { TesourosItemsMagicosComponent } from './components/tesouros-items-magicos/tesouros-items-magicos.component';
import { TesouroItemMagicoEditComponent } from './components/tesouros-items-magicos/tesouro-item-magico-edit/tesouro-item-magico-edit.component';
import { ItemComponent } from './components/tesouros-items-magicos/item/item.component';
import { GeralComponent } from './geral/geral.component';
import { PersonagemBarComponent } from './components/personagem-bar/personagem-bar.component';
import { AtributosComponent } from './components/atributos/atributos.component';
import { ProtecaoComponent } from './components/protecao/protecao.component';
import { MoedasComponent } from './components/moedas/moedas.component';
import { PainelControleComponent } from './components/painel-controle/painel-controle.component';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HabilidadesComponent,
    HabilidadeComponent,
    HabilidadeEditComponent,
    ArmasComponent,
    ArmaEditComponent,
    ArmaComponent,
    EquipamentosComponent,
    EquipamentoComponent,
    EquipamentoEditComponent,
    TesourosItemsMagicosComponent,
    TesouroItemMagicoEditComponent,
    ItemComponent,
    GeralComponent,
    PersonagemBarComponent,
    AtributosComponent,
    ProtecaoComponent,
    MoedasComponent,
    PainelControleComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
