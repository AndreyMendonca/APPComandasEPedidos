import { req } from "../lib/axios"
import { AbrirComanda, Comanda, PedidoDTO } from "../types/comanda";

export const ComandaService = {
    getAbertas : async (): Promise<Comanda[]> =>{
        try {
            const response = await req.get('/comandas/abertas');
            if(response.status === 200){
                return response.data;
            }else{
                console.log("Erro com o seguinte status " + response.status );
                return [];
            }
        } catch (error) {
            console.error("Erro na API ao salvar categoria:", error);
            throw new Error("Erro ao salvar categoria. Tente novamente mais tarde.");
        }
    },
    abrirComanda : async (comanda: AbrirComanda): Promise<Comanda> =>{
        try{
            const response = await req.post('/comandas',comanda)

            if(response.status === 201){
                return response.data;
            }

            return response.data;
        }catch(error: any){
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message || "Erro desconhecido ao abrir comanda.");
            } else {
                throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
            }
        }
    },
    lancarItensAComanda: async (id:string,pedido: PedidoDTO):  Promise<Comanda> =>{
        try{
            const response = await req.put(`/comandas/${id}/adicionar`, pedido)
            if(response.status === 200){
                return response.data;
            }else{
                console.log("Erro com o seguinte status " + response.status );
                return response.data;
            }
        }catch(error: any){
            console.log(`/comanda/${id}/adicionar`)
            throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.")
        }
    },
    fecharComanda: async (id:string) : Promise<Comanda> =>{
        try{
            const response = await req.put(`/comandas/${id}/fecharComanda`)
            if(response.status === 200){
                return response.data;
            }else{
                console.log("Erro com o seguinte status " + response.status );
                return response.data;
            }
        }catch(error: any){
            console.log(`/comanda/${id}/adicionar`)
            throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.")
        }

    },
    getById: async (id:string): Promise<Comanda> => {
        try{
            const response = await req.get(`/comandas/${id}`)
            console.log(response.data)
            if(response.status === 200){
                return response.data;
            }else{
                console.log("Erro com o seguinte status " + response.status );
                return response.data;
            }
        }catch(error){
            console.log(`/comanda/${id}/adicionar`)
            throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.")
        }
    }
}