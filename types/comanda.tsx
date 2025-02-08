import { Produto } from "./produtos";

export type Pedido = {
    id: number;
    itens: ItemPedido[]; 
    valorTotalFinal: number;
    pagamentoTotal: number;
    pagamento: Pagamento[];
}

export type ItemPedido = {
    quantidade: number;
    produto: Produto;
    totalValorParciar: number;
}

export type Comanda= {
    id: number;
    identificacao: string;
    aberta?: boolean;
    abertura?: string;
    fechamento?: String | null;
    pedido: Pedido;
}

export type Pagamento = {
    id: number;
    valorPago: number;
    formaDePagamento: FormaDePagamento;
}

export type FormaDePagamento = {
    id: number;
    identificacao: string;
}


/// DTO
export type ItensPedidoDTO = {
    idProduto?: number | null;
    quantidade: number;
}

export type PedidoDTO = {
    itens: ItensPedidoDTO[];
}

export type AbrirComanda = {
    identificacao: string;
}

export type pagamentoDTO = {
    formaDePagamento: number;
    valorPago : number;
}