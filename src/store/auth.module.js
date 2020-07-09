import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {LOGIN,LOGOUT,REGISTER} from "@/store/actions.type";
import { resolve, reject } from "core-js/fn/promise";

const state = {
    errors:null,
    user:{},
    isAuthenticated: !!JwtService.getToken()
};

const getters = {
    currentUser(state){
        return state.user;
    },
    isAuthenticated(state){
        return state.isAuthenticated;
    }
};

const actions = {
    [REGISTER](context, parameters){
        return new Promise((resolve,reject)=>{
            // ApiService.
        })
    }
}