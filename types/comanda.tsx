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