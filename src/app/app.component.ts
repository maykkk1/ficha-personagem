import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FichaService } from './services/ficha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ficha-personagem';
  formulario : FormGroup;
  dados: any;

  constructor(private service: FichaService){}

  ngOnInit(): void {
    this.dados = this.service.recuperarDados();

    this.formulario = new FormGroup({
      nomePersonagem : new FormControl(this.dados['nomePersonagem']),
      classePersonagem : new FormControl(this.dados['classePersonagem']),
      alinhamentoPersonagem : new FormControl(this.dados['alinhamentoPersonagem']),
      tituloPersonagem : new FormControl(this.dados['tituloPersonagem']),
      nivelPersonagem : new FormControl(this.dados['nivelPersonagem']),
      forcaPersonagem : new FormControl(this.dados['forcaPersonagem']),
      sabedoriaPersonagem : new FormControl(this.dados['sabedoriaPersonagem']),
      inteligenciaPersonagem : new FormControl(this.dados['inteligenciaPersonagem']),
      destrezaPersonagem : new FormControl(this.dados['destrezaPersonagem']),
      constituicaoPersonagem : new FormControl(this.dados['constituicaoPersonagem']),
      carismaPersonagem : new FormControl(this.dados['carismaPersonagem']),
      mortePersonagem : new FormControl(this.dados['mortePersonagem']),
      varinhaPersonagem : new FormControl(this.dados['varinhaPersonagem']),
      paralisiaPersonagem : new FormControl(this.dados['paralisiaPersonagem']),
      soproPersonagem : new FormControl(this.dados['soproPersonagem']),
      feiticosPersonagem : new FormControl(this.dados['feiticosPersonagem']),
      protecaoFeiticosPersonagem : new FormControl(this.dados['protecaoFeiticosPersonagem']),
      pontosVidaPersonagem : new FormControl(this.dados['pontosVidaPersonagem']),
      classeArmaduraPersonagem : new FormControl(this.dados['classeArmaduraPersonagem']),
      ataquePersonagem : new FormControl(this.dados['ataquePersonagem']),
      pontosVidaMaPersonagem : new FormControl(this.dados['pontosVidaMaPersonagem']),
      modificadorConVidaPersonagem : new FormControl(this.dados['modificadorConVidaPersonagem']),
      semArmaduraModificadorDes : new FormControl(this.dados['semArmaduraModificadorDes']),
      classeArmaduraModificadorDes : new FormControl(this.dados['classeArmaduraModificadorDes']),
      ataqueDistanciaModificadorDestreza : new FormControl(this.dados['ataqueDistanciaModificadorDestreza']),
      matrizAtq9 : new FormControl(this.dados['matrizAtq9']),
      matrizAtq8 : new FormControl(this.dados['matrizAtq8']),
      matrizAtq7 : new FormControl(this.dados['matrizAtq7']),
      matrizAtq6 : new FormControl(this.dados['matrizAtq6']),
      matrizAtq5 : new FormControl(this.dados['matrizAtq5']),
      matrizAtq4 : new FormControl(this.dados['matrizAtq4']),
      matrizAtq3 : new FormControl(this.dados['matrizAtq3']),
      matrizAtq2 : new FormControl(this.dados['matrizAtq2']),
      matrizAtq1 : new FormControl(this.dados['matrizAtq1']),
      matrizAtq0 : new FormControl(this.dados['matrizAtq0']),
      iniciativaModificadorDestreza : new FormControl(this.dados['iniciativaModificadorDestreza']),
      reacaoModificadorCarisma : new FormControl(this.dados['reacaoModificadorCarisma']),
      ouvirRuidos : new FormControl(this.dados['ouvirRuidos']),
      abrirPortas : new FormControl(this.dados['abrirPortas']),
      encontrarPassagens : new FormControl(this.dados['encontrarPassagens']),
      encontrarArmadilhas : new FormControl(this.dados['encontrarArmadilhas']),
      movimentoJornada : new FormControl(this.dados['movimentoJornada']),
      movimentoExploracao : new FormControl(this.dados['movimentoExploracao']),
      movimentoEncontro : new FormControl(this.dados['movimentoEncontro']),
      idioma1 : new FormControl(this.dados['idioma1']),
      idioma2 : new FormControl(this.dados['idioma2']),
      idioma3 : new FormControl(this.dados['idioma3']),
      letrado : new FormControl(this.dados['letrado']),
      armasArmaduras1 : new FormControl(this.dados['armasArmaduras1']),
      armasArmaduras2 : new FormControl(this.dados['armasArmaduras2']),
      armasArmaduras3 : new FormControl(this.dados['armasArmaduras3']),
      armasArmaduras4 : new FormControl(this.dados['armasArmaduras4']),
      armasArmaduras5 : new FormControl(this.dados['armasArmaduras5']),
      armasArmaduras6 : new FormControl(this.dados['armasArmaduras6']),
      armasArmaduras7 : new FormControl(this.dados['armasArmaduras7']),
      armasArmaduras8 : new FormControl(this.dados['armasArmaduras8']),
      armasArmaduras9 : new FormControl(this.dados['armasArmaduras9']),
      armasArmaduras10 : new FormControl(this.dados['armasArmaduras10']),
      magicos1 : new FormControl(this.dados['magicos1']),
      magicos2 : new FormControl(this.dados['magicos2']),
      magicos3 : new FormControl(this.dados['magicos3']),
      magicos4 : new FormControl(this.dados['magicos4']),
      magicos5 : new FormControl(this.dados['magicos5']),
      magicos6 : new FormControl(this.dados['magicos6']),
      magicos7 : new FormControl(this.dados['magicos7']),
      magicos8 : new FormControl(this.dados['magicos8']),
      magicos9 : new FormControl(this.dados['magicos9']),
      magicos10 : new FormControl(this.dados['magicos10']),
      tesouros1 : new FormControl(this.dados['tesouros1']),
      tesouros2 : new FormControl(this.dados['tesouros2']),
      tesouros3 : new FormControl(this.dados['tesouros3']),
      tesouros4 : new FormControl(this.dados['tesouros4']),
      tesouros5 : new FormControl(this.dados['tesouros5']),
      tesouros6 : new FormControl(this.dados['tesouros6']),
      tesouros7 : new FormControl(this.dados['tesouros7']),
      tesouros8 : new FormControl(this.dados['tesouros8']),
      tesouros9 : new FormControl(this.dados['tesouros9']),
      tesouros10 : new FormControl(this.dados['tesouros10']),
      experiencia : new FormControl(this.dados['experiencia']),
      experienciaProx : new FormControl(this.dados['experienciaProx']),
      modificadorXp : new FormControl(this.dados['modificadorXp']),
      pl : new FormControl(this.dados['pl']),
      po : new FormControl(this.dados['po']),
      pe : new FormControl(this.dados['pe']),
      pp : new FormControl(this.dados['pp']),
      pc : new FormControl(this.dados['pc']),
      te : new FormControl(this.dados['te']),
      eq : new FormControl(this.dados['eq']),
      cargaTotal : new FormControl(this.dados['cargaTotal'])
      // nomePersonagem : new FormControl(null),
      // classePersonagem : new FormControl(null),
      // alinhamentoPersonagem : new FormControl(null),
      // tituloPersonagem : new FormControl(null),
      // nivelPersonagem : new FormControl(null),
      // forcaPersonagem : new FormControl(null),
      // sabedoriaPersonagem : new FormControl(null),
      // inteligenciaPersonagem : new FormControl(null),
      // destrezaPersonagem : new FormControl(null),
      // constituicaoPersonagem : new FormControl(null),
      // carismaPersonagem : new FormControl(null),
      // mortePersonagem : new FormControl(null),
      // varinhaPersonagem : new FormControl(null),
      // paralisiaPersonagem : new FormControl(null),
      // soproPersonagem : new FormControl(null),
      // feiticosPersonagem : new FormControl(null),
      // protecaoFeiticosPersonagem : new FormControl(null),
      // pontosVidaPersonagem : new FormControl(null),
      // classeArmaduraPersonagem : new FormControl(null),
      // ataquePersonagem : new FormControl(null),
      // pontosVidaMaPersonagem : new FormControl(null),
      // modificadorConVidaPersonagem : new FormControl(null),
      // semArmaduraModificadorDes : new FormControl(null),
      // classeArmaduraModificadorDes : new FormControl(null),
      // ataqueDistanciaModificadorDestreza : new FormControl(null),
      // matrizAtq9 : new FormControl(null),
      // matrizAtq8 : new FormControl(null),
      // matrizAtq7 : new FormControl(null),
      // matrizAtq6 : new FormControl(null),
      // matrizAtq5 : new FormControl(null),
      // matrizAtq4 : new FormControl(null),
      // matrizAtq3 : new FormControl(null),
      // matrizAtq2 : new FormControl(null),
      // matrizAtq1 : new FormControl(null),
      // matrizAtq0 : new FormControl(null),
      // h1 : new FormControl(null),
      // h2 : new FormControl(null),
      // h3 : new FormControl(null),
      // h4 : new FormControl(null),
      // h5 : new FormControl(null),
      // h6 : new FormControl(null),
      // h7 : new FormControl(null),
      // h8 : new FormControl(null),
      // h9 : new FormControl(null),
      // h10 : new FormControl(null),
      // pericia1 : new FormControl(null),
      // pericia2 : new FormControl(null),
      // pericia3 : new FormControl(null),
      // pericia4 : new FormControl(null),
      // pericia5 : new FormControl(null),
      // pericia6 : new FormControl(null),
      // pericia7 : new FormControl(null),
      // pericia8 : new FormControl(null),
      // pericia9 : new FormControl(null),
      // pericia10 : new FormControl(null),
      // arma1 : new FormControl(null),
      // arma2 : new FormControl(null),
      // arma3 : new FormControl(null),
      // arma4 : new FormControl(null),
      // arma5 : new FormControl(null),
      // arma6 : new FormControl(null),
      // arma7 : new FormControl(null),
      // arma8 : new FormControl(null),
      // arma9 : new FormControl(null),
      // arma10 : new FormControl(),
      // iniciativaModificadorDestreza : new FormControl(null),
      // reacaoModificadorCarisma : new FormControl(null),
      // ouvirRuidos : new FormControl(null),
      // abrirPortas : new FormControl(null),
      // encontrarPassagens : new FormControl(null),
      // encontrarArmadilhas : new FormControl(null),
      // movimentoJornada : new FormControl(null),
      // movimentoExploracao : new FormControl(null),
      // movimentoEncontro : new FormControl(null),
      // idioma1 : new FormControl(null),
      // idioma2 : new FormControl(null),
      // idioma3 : new FormControl(null),
      // letrado : new FormControl(null),
      // equip1 : new FormControl(null),
      // equip2 : new FormControl(null),
      // equip3 : new FormControl(null),
      // equip4 : new FormControl(null),
      // equip5 : new FormControl(null),
      // equip6 : new FormControl(null),
      // equip7 : new FormControl(null),
      // equip8 : new FormControl(null),
      // equip9 : new FormControl(null),
      // equip10 : new FormControl(null),
      // armasArmaduras1 : new FormControl(null),
      // armasArmaduras2 : new FormControl(null),
      // armasArmaduras3 : new FormControl(null),
      // armasArmaduras4 : new FormControl(null),
      // armasArmaduras5 : new FormControl(null),
      // armasArmaduras6 : new FormControl(null),
      // armasArmaduras7 : new FormControl(null),
      // armasArmaduras8 : new FormControl(null),
      // armasArmaduras9 : new FormControl(null),
      // armasArmaduras10 : new FormControl(null),
      // magicos1 : new FormControl(null),
      // magicos2 : new FormControl(null),
      // magicos3 : new FormControl(null),
      // magicos4 : new FormControl(null),
      // magicos5 : new FormControl(null),
      // magicos6 : new FormControl(null),
      // magicos7 : new FormControl(null),
      // magicos8 : new FormControl(null),
      // magicos9 : new FormControl(null),
      // magicos10 : new FormControl(null),
      // tesouros1 : new FormControl(null),
      // tesouros2 : new FormControl(null),
      // tesouros3 : new FormControl(null),
      // tesouros4 : new FormControl(null),
      // tesouros5 : new FormControl(null),
      // tesouros6 : new FormControl(null),
      // tesouros7 : new FormControl(null),
      // tesouros8 : new FormControl(null),
      // tesouros9 : new FormControl(null),
      // tesouros10: new FormControl(null),
      // experiencia : new FormControl(null),
      // experienciaProx : new FormControl(null),
      // modificadorXp : new FormControl(null),
      // pl : new FormControl(null),
      // po : new FormControl(null),
      // pe : new FormControl(null),
      // pp : new FormControl(null),
      // pc : new FormControl(null),
      // te : new FormControl(null),
      // eq : new FormControl(null),
      // cargaTotal : new FormControl(null)
      
    });
  }

  onSubmit(){
    this.service.salvarDados(this.formulario.value);
  }


}
