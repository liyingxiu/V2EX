import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { LOGIN, LOGOUT, REGISTER,SETUSERINFO } from "@/store/actions.type";
import { PUSHERROR, CLEARERRORS, SETUSER, SETAUTHENTICATE } from "@/store/mutations.type";
import { resolve, reject } from "core-js/fn/promise";

const state = {
    errors: [],
    user: {},
    isAuthenticated: !!JwtService.getToken(),
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    currentError(state) {
        return state.errors[0];
    }
};

const mutations = {
    [PUSHERROR](state, err) {
        state.errors.push(err);
        console.log(state.errors);
    },
    [CLEARERRORS](state) {
        state.errors = [];
    },
    [SETUSER](state, userData) {
        state.user = userData;
    },
    [SETAUTHENTICATE](state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated;
    }

}

const actions = {
    [REGISTER](context, parameters) {
        context.commit(CLEARERRORS);
        return new Promise((resolve, reject) => {
            ApiService.post('/api/user/register', parameters)
                .then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        resolve();
                    } else {
                        context.commit(PUSHERROR, res.data.message);
                    }
                })
        })
    },
    [LOGIN](context, parameters) {
        context.commit(CLEARERRORS);
        return new Promise((resolve, reject) => {
            ApiService.post('/api/user/login', parameters)
                .then(res => {
                    console.log(res);
                    if (res.data.code === 0) {
                        context.commit(SETAUTHENTICATE, true);
                        context.commit(SETUSER, res.data.data);
                        JwtService.saveToken(res.data.data.token);
                        resolve();
                    } else {
                        context.commit(PUSHERROR, res.data.message);
                    }
                })
        })
    },
    [SETUSERINFO](context) {
        return new Promise((resolve, reject) => {
            ApiService.get('/api/user/info')
                .then(res => {
                    if (res.data.code === 0) {
                        //用户的token还是有效的，采取的就跟登录时候一样
                        context.commit(SETAUTHENTICATE, true);
                        context.commit(SETUSER, res.data.data);
                        JwtService.saveToken(res.data.data.token);
                        resolve();
                    }else{
                        //用户的token失效
                        console.log(res.data.data.message);
                        JwtService.destroyToken();
                        context.commit(SETAUTHENTICATE, false);
                        reject();
                    }
                })
        })
    },
    [LOGOUT](context){
        context.commit(CLEARERRORS);
        JwtService.destroyToken();
        context.commit(SETUSER,{});
        context.commit(SETAUTHENTICATE,false);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}