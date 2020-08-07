module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        // proxy: {//配置跨域
        //     '/v2ex': {
        //         target: 'https://www.v2ex.com/api',
        //         ws: true,
        //         secure: false,
        //         changOrigin: true,//允许跨域
        //     }
        // }
    },
    configureWebpack: {
        devtool: 'source-map'
      }
}

// 在页面中使用的时候
// 请求接口后台的接口为5001 我们本地的接口为8080,所以我们需要去到vue.config.js配置跨域 http://localhost:5001/api/
//  this.$axios.post('/api/users/register',this.user)
//  .then(res =>{
//      // 注册成功
//      alert('注册成功!')
//      this.$router.push('/login')
//      console.log(res)
//  })//在http全局配置了catch所以这边是不用配置的