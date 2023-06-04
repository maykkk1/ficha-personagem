export class Item {
    id: number;
    nome: string;
    peso: number;
    valor: number;
    descricao: string;
    tipo: itemTipoEnum;
    quantidade: number;
}

enum itemTipoEnum {
    tesouro = 0,
    itemMagico = 1
}