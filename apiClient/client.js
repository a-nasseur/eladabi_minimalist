import { create } from 'apisauce';


const apiClient = create({
    baseURL: "https://eladabi.herokuapp.com/api",

});


export default apiClient;