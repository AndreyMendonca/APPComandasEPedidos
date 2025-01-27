import { Categoria } from "./categoria";

export type Produto = {
    id?: number;
    nome: string;
    precoVenda: number;
    categoria: Categoria;
}