import axios from 'axios';

import FormData from 'form-data'


class Shop_Carservice{
    
    getservice(props){
        return axios.get('http://localhost:8080/api/v1/Shop_Car/listcar',{ params: { email: props.user} });
    }
}


export default new Shop_Carservice();
