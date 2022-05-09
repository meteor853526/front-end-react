import axios from 'axios';
const api = 'http://localhost:8080/api/v1/product';

class testservice{
    
    getservice(){
        return axios.get(api);
    }
}

export default new testservice();
