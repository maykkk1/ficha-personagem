import { Injectable } from "@angular/core";
import { Arma } from "./arma.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ArmasService {
    armasChange: Subject<Arma[]> = new Subject<Arma[]>();
    bolsaDeArmas: Arma[];

    constructor(){}

    getBolsaDeArmas(){
        return [...this.bolsaDeArmas];
    }

    sincronizarBolsaDeArmas(){
        if(localStorage.getItem('armas') != null) {
            this.bolsaDeArmas = JSON.parse(localStorage.getItem('armas')!);
        } else {
            localStorage.setItem('armas', '[]');
        }
    }

    adicionarArma(arma: Arma){
        const idx = this.bolsaDeArmas.findIndex(a => a.nome == arma.nome);
        if(idx != -1){
            this.bolsaDeArmas[idx].quantidade += arma.quantidade;
        } else {
            this.bolsaDeArmas.push(arma);
        }
        this.salvarDados();
    }

    salvarDados(){
        localStorage.setItem('armas', JSON.stringify(this.bolsaDeArmas));
        this.armasChange.next([...this.bolsaDeArmas]);
    }

    adicionarUnidade(nome: string){
        const idx = this.bolsaDeArmas.findIndex(a => a.nome === nome);
        this.bolsaDeArmas[idx].quantidade++;
        this.salvarDados();
    }

    removerUnidade(nome: string) {
        const idx = this.bolsaDeArmas.findIndex(a => a.nome === nome);
        if(this.bolsaDeArmas[idx].quantidade > 1) {
            this.bolsaDeArmas[idx].quantidade--;
        } else {
            this.bolsaDeArmas.splice(idx, 1);
        }
        this.salvarDados();
    }

}