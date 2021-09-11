import axios from "axios";

const URL = "https://randomuser.me/api/?results=50&nat=us"

export default {
    getEmployees: function() {
        return axios.get(URL);
    }
}

//const randomUserGet = ()=> {
//    return axios.get("https://randomuser.me/").then//(function (response) {
//     return(response);
// }).catch(function (error) {
//     console.error(error);
// });
//}
//
//const apiCalls = { randomUserGet }
//
//export default apiCalls