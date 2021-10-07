import axios from "axios";

//URL FILMES EM CARTAZ
// /movie/now_playing &language=pt-BR &page=1

export const key = "bf75a6cfc683aa931dcbeaf51073aba1"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;