import axios from "axios";
// cep que queremos 091010188/json
const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})

export default api;