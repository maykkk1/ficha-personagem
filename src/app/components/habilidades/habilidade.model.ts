export class Habilidade {
    id: number;
    abilityName: string;
    abilityModifier: number;
    abilityDesc: string;

    constructor(id: number, name: string, modifier: number, desc: string){
        this.id = id,
        this.abilityName = name,
        this.abilityModifier = modifier,
        this.abilityDesc = desc
    }
}

export class HabilidadeData {
    idAtual: number;
    data: Habilidade[];
}