import axios from "axios";
import DadosEstaticosService from "../utils/dadosEstaticosService";
const api = axios.create({
  baseURL: DadosEstaticosService.getURLServidor(),
});

export default api;
