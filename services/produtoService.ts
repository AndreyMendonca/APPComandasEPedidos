import { req } from "../lib/axios";
import { Produto } from "../types/produtos";

export const ProdutoService = {
    getAll : async (): Promise<Produto[]> => {
        try{
            const response = await req.get('/produtos');
            if(response.status === 200){
                return response.data;
            }else{
                console.log("Erro com o seguinte status " + response.status );
                return [];
            }  
        }catch(error){
            console.error("Erro na API ao salvar categoria:", error);
            return [];
        }   
    }
    ,
    save : async (produto: Produto): Promise<Produto | null> => {
        try{
            const response = await req.post('/produtos', produto);
            if(response.status === 201){
                return response.data;
            }
            return null
        }catch(erro){
            console.error("Erro na API ao salvar categoria:", erro);
            throw new Error("Erro ao salvar categoria. Tente novamente mais tarde.");
        }
    }
    ,
    delete : async (id?: number): Promise<void> => {
        try{
            const response = await req.delete(`/produtos/${id}`);
            if(response.status === 204){
                return;
            }else{
                console.log("Erro da api: " + response.status);
            }
        }catch(error: any){
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message || "Erro desconhecido ao fechar comanda.");
            } else {
                throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
            }
        }
    },
    getByNome: async (nome: string): Promise<Produto[]> =>{
        try{
            const response = await req.get(`produtos/nome/${nome}`);
            if(response.status === 200){
                return response.data;
            }
            return [];
        }catch(error: any){
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message || "Erro desconhecido ao buscar.");
            } else {
                throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
            }
        }
    }
}