import { req } from "../lib/axios"
import { AbrirComanda, Comanda, pagamentoDTO, PedidoDTO, RelatorioVenda } from "../types/comanda";

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
            throw new Error("Erro. Tente novamente mais tarde.");
        }
    },
    getAll :  async (): Promise<Comanda[]> =>{
        try{
            const response = await req.get('/comandas/todas');
            if(response.status === 200){
                return response.data;
            }
            return [];
        }catch(error: any){
            console.log(error);
            throw new Error("Erro. Tente novamente mais tarde.");
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
    adicionarPagamento : async (id:string, pagamento: pagamentoDTO) : Promise<Comanda> =>{
        try{
            const response = await req.put(`/comandas/${id}/pagamento`, pagamento)
            if(response.status === 200){
                return response.data;
            }else{
                console.log("Erro com o seguinte status " + response.status );
                return response.data;
            }
        }catch(error: any){
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
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message || "Erro desconhecido ao fechar comanda.");
            } else {
                throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
            }
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
    },
    getByIdentificacao: async (identificacao: string) : Promise<Comanda[]> =>{
        try{
            const response = await req.get(`/comandas/nome/${identificacao}`)
            if(response.status === 200){
                return response.data
            }
            return [];
        }catch(error: any){
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message || "Erro desconhecido buscas comanda.");
            } else {
                throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
            }
        }
    },
    relatorio : async () : Promise<RelatorioVenda> =>{
        try{
            const response = await req.get('comandas/relatorio')
            return response.data;
        }catch(error){
            throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
        }
    }
}