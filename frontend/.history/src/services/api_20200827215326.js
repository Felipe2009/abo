import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //parte da url mantida em todas
})

export default api; //para os outros arquivos conseguir importar esse arquivo