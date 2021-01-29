import axios from 'axios';

const ABX_API_BASE_URL = "http://localhost:8080/api/orgweb/assinatura";
const ABX_API_BASE_URL_NEW = "http://localhost:8080/api/orgweb/assinatura"

class AssinaturaService{

    getAssinatura(){
        return axios.get(ABX_API_BASE_URL);
    }
    setAssinatura(abx){
        return axios.post(ABX_API_BASE_URL + '/new-assinatura', abx);
    }
    getById(abxId){
        return axios.get(ABX_API_BASE_URL + '/' + abxId);
    }
    updateAssinatura(abx, abxId){
        return axios.put(ABX_API_BASE_URL + '/' + abx, abxId);
    }
    delAssinatura(abxId){
        return axios.delete(ABX_API_BASE_URL + '/' + abxId);
    }

}
export default new AssinaturaService();