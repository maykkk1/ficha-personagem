import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class FichaService {
    constructor() {}

    salvarDados(dados: any){
        localStorage.setItem('dados', JSON.stringify(dados))
    }

    recuperarDados(){
        return JSON.parse(localStorage.getItem('dados')!)
    }
    }