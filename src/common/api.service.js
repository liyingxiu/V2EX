import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service.js";
// import API from "@/common/config.js";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        // Vue.axios.defaults.baseURL = API;
    },
    setHeader() {
        Vue.axios.defaults.headers.common['Authorization'] = `Token${JwtService.getToken()}`;
    },
    get(resource, params = "") {
        return Vue.axios.get(resource, params).catch(err => {
            throw new Error(`[ApiService] ${err}`);
        })
    },
    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },
    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },
    delete(resource) {
        return Vue.axios.delete(resource).catch(err => {
            throw new Error(`[ApiService] ${err}`);
        })
    }
}

export default ApiService;


export const ArticlelServive = {
    get(resource) {
        return ApiService.get(`/v2ex/${resource}`);
    },
    query(resource, params = "") {
        return ApiService.get(`/v2ex/${resource}`, params);
    },
    post(resource, params) {
        return ApiService.post(`/v2ex/${resource}`, params);
    },
    delete(resource) {
        return ApiService.delete(`/v2ex/${resource}`);
    }
}