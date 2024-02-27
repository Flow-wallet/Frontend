import { api } from "../../config";
import type { ApiRequest } from "./models/request";
import { ApiResponse } from "./models/response";

interface IApiService {
  get<T = any>(params: ApiRequest): Promise<ApiResponse<T>>;
  post<T = any>(params: ApiRequest): Promise<ApiResponse<T>>;
}

// Adicionar requisição com o token que será salvo na store
// Precisa do token pra identificar um usuário logado e se ele pode fazer a requisição

class ApiServiceImplementation implements IApiService {
  async post<T = any>({ url, body }: ApiRequest): Promise<ApiResponse<T>> {
    const { data, status } = await api.get<T>(url, body);
    return new ApiResponse(data, status);
  }
  async get<T = any>({ url }: ApiRequest): Promise<ApiResponse<T>> {
    const { data, status } = await api.get<T>(url);
    return new ApiResponse(data, status);
  }
}

export { ApiServiceImplementation };
