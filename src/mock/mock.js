import Mock from 'mockjs';

let testuser = {
    username: "xiaoqing",
    email: "123@123.com",
    password: "123123",
    token: "dwhfjkahjuigzxgyua121", // jwt token
    nickname: "这是昵称",
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
    roleName: "管理员",
}

Mock.mock('/api/user/register', 'post', options => {
    let body = JSON.parse(options.body);
    // console.log(body);
    if (body.email === testuser.email) {
        return {
            code: 1,
            message: "email error"
        }
    } else if (body.username === testuser.username) {
        return {
            code: 1,
            message: "username error"
        }
    } else {
        return {
            code: 0,
            message: "success"
        }
    }
})

Mock.mock('/api/user/login', 'post', options => {
    let body = JSON.parse(options.body);
    if (body.username == testuser.username && body.password === testuser.password) {
        return {
            code: 0,
            message: "success",
            data: {
                username:testuser.username,
                email:testuser.email,
                token: testuser.token,
                nickname: testuser.nickname,
                avatar: testuser.avatar,
                roleName: testuser.roleName,
            }
        }
    } else if (body.email == testuser.em && body.password === testuser.password) {
        return {
            code: 0,
            message: "success",
            data: {
                username:testuser.username,
                email:testuser.email,
                token: testuser.token,
                nickname: testuser.nickname,
                avatar: testuser.avatar,
                roleName: testuser.roleName,
            }
        }
    } else {
        return {
            code: 1,
            message: "用户名或密码错误"
        }
    }
});


Mock.mock('/api/user/info','get',options=>{
    let body = JSON.parse(options.body);
    console.log(options);
    //token有效
    // return {
    //     code: 0,
    //     message: "success",
    //     data: {
    //         username:testuser.username,
    //         email:testuser.email,
    //         token: testuser.token,
    //         nickname: testuser.nickname,
    //         avatar: testuser.avatar,
    //         roleName: testuser.roleName,
    //     }
    // }

    //token 失效
    return {
        code:1,
        message:"token 失效"
    }
})
