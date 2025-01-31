export type Comanda = {
    id: number;
    identificacao: string;
    aberta?: boolean;
    abertura?: string;
    fechamento?: String | null;
}

export type AbrirComanda = {
    identificacao: string;
}

export type ItensPedido = {
    idProduto?: number | null;
    quantidade: number;
}

export type Pedido = {
    itens: ItensPedido[];
}