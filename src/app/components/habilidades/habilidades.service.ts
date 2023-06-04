import { Injectable } from "@angular/core";
import { Habilidade, HabilidadeData } from "./habilidade.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class HabilidadeService {
    habilidadesChange: Subject<Habilidade[]> = new Subject<Habilidade[]>;
    habilidades: {idAtual: number, data: Habilidade[]};
    editionMode: boolean = false;
    constructor(){}

    sincronizarHabilidades(){
        if(localStorage.getItem('habilidades') != null) {
            this.habilidades = JSON.parse(localStorage.getItem('habilidades')!);
        } else {
            const data = {
                idAtual: 0,
                data: []
            };
            localStorage.setItem('habilidades', JSON.stringify(data));
        }
        }

    salvarHabilidade(habilidade: Habilidade) {
        const habilidadeData = habilidade;
        habilidadeData.id = this.habilidades.idAtual;
        this.habilidades.data.push(habilidadeData);
        this.habilidades.idAtual++;
        this.salvarDados();
    }

    excluirHabilidade(id: number){
        const idx = this.habilidades.data.findIndex(h => h.id == id);
        this.habilidades.data.splice(idx, 1);
        this.salvarDados();
    }

    editarHabilidade(habilidade: Habilidade){
        const idx = this.habilidades.data.findIndex(h => h.id == habilidade.id);
        this.habilidades.data[idx] = habilidade;
        this.salvarDados();
        this.editionMode = false;
    }

    getHabilidadeByid(id: number){
        return this.habilidades.data.find(h => h.id == id);
    }

    getHabilidades(){
        return JSON.parse(localStorage.getItem('habilidades')!);
    }

    salvarDados(){
        localStorage.setItem('habilidades', JSON.stringify(this.habilidades));
        this.habilidadesChange.next(this.habilidades.data);
    }
}