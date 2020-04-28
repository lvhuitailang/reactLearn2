import axios from 'axios';

import apis from "./apis";

let ajax = axios.create({
    baseURL:apis.baseURL
});

export const getTodos = ()=>{
    return ajax.get(apis.todos);
}
