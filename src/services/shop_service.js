import axios from 'axios';

import FormData from 'form-data'


class Shop_Carservice{
    
    getservice(){
        return axios.post('http://localhost:8080/api/v1/Shop_Car/listcar',{ params: { email: 'meteor853526@gmail.com' } });
    }
}


export default new Shop_Carservice();
