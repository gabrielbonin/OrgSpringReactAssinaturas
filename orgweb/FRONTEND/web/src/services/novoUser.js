import axios from 'axios';

const ABX_API_BASE_URL = "http://localhost:8080/api/orgweb/users";

class UserService{

    getAbx(){
        return axios.get(ABX_API_BASE_URL);
    }
    setAbx(abx){
        return axios.post(ABX_API_BASE_URL + '/new-user', abx);
    }
    getById(abxId){
        return axios.get(ABX_API_BASE_URL + '/' + abxId);
    }
    updateAbx(abx, abxId){
        return axios.put(ABX_API_BASE_URL + '/' + abx, abxId);
    }
    delAbx(abxId){
        return axios.delete(ABX_API_BASE_URL + '/' + abxId);
    }

}
export default new UserService();