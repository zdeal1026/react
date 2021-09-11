//import axios from 'axios';
//const BASEURL = '';
//const APIKEY = '';
//
//export default {
//    search: function(query) {
//        return axios.get(BASEURL + query + APIKEY);
//    }
//};

import axios from "axios";

//const options = {
//  method: 'GET',
//  url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
//  params: {team: '33'},
//  headers: {
//    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
//    'x-rapidapi-key': '74de75019emshf7113eace1d15efp1d2e9ajsndd98bdd90117'
//  }
//};
//

const randomUserGet = ()=> {
    return axios.get("https://randomuser.me/").then(function (response) {
     return(response);
 }).catch(function (error) {
     console.error(error);
 });
}

const apiCalls = { randomUserGet }

export default apiCalls