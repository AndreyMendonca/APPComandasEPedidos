import { req } from "../lib/axios";
import { Categoria } from "../types/categoria";

export const CategoriaService = {
    getAll : async (): Promise<Categoria[]> => {
        try{
            const response = await req.get('/categorias');
            if(response.status === 200){
                return response.data;
            }else{
                console.log("deu ruim");
                return [];
            }  
        }catch(erro){
            console.log("deu erro " + erro);
            return [];
        }   
    },
    save : async (categoria: Categoria): Promise<Categoria | null> => {
        try{
            const response = await req.post('/categorias', categoria);
            if(response.status === 201){
                return response.data;
            }
            return null
        }catch(erro){
            console.error("Erro na API ao salvar categoria:", erro);
            throw new Error("Erro ao salvar categoria. Tente novamente mais tarde.");
        }
    },
    delete : async (id?: number): Promise<void> => {
        try{
            const response = await req.delete(`/categorias/${id}`);
            if(response.status === 204){
                return;
            }else{
                console.log("Erro da api: " + response.status);
            }
        }catch(erro){
            console.error("Erro na API ao deletar categoria:", erro);
            throw new Error("Erro ao deletar categoria. Tente novamente mais tarde.");
        }
    }
}