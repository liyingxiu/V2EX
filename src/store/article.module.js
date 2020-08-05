import Vue from 'vue';
import ArticleService from "@/common/api.service.js";
import {FETCH_ARTICLES} from "@/store/actions.type.js";
import { resolve } from 'core-js/fn/promise';
import { ArticlelServive } from '../common/api.service';

const initialArticle = {
    nodeName: "",
    title: "",
    articleUrl: "",
    articleRenderedConten: "",
    username: "",
    userAvatar: "",
    usernameUrl: ""
};

export const state = {...initialArticle};

export const mutations = {

}

export const actions = {
    [FETCH_ARTICLES](context,resource, keyword=""){
        return new Promise((resolve,reject)=>{
            ArticlelServive.get(resource)
            .then(res=>{
                console.log(res);
                resolve();
            })
        })
    }
}

export const getters = {

}
//   {
//     "node": {
//         "avatar_large": "https://cdn.v2ex.com/navatar/c9e1/074f/104_large.png?m=1594135368",
//         "name": "cloud",
//         "avatar_normal": "https://cdn.v2ex.com/navatar/c9e1/074f/104_normal.png?m=1594135368",
//         "title": "\u4e91\u8ba1\u7b97",
//         "url": "https://www.v2ex.com/go/cloud",
//         "topics": 4099,
//         "footer": "",
//         "header": "\u5173\u4e8e\u4e91\u8ba1\u7b97\u6280\u672f\u548c\u5e73\u53f0\u7684\u7efc\u5408\u8ba8\u8bba\u533a\u3002",
//         "title_alternative": "Cloud Computing",
//         "avatar_mini": "https://cdn.v2ex.com/navatar/c9e1/074f/104_mini.png?m=1594135368",
//         "stars": 2494,
//         "aliases": [],
//         "root": false,
//         "id": 104,
//         "parent_node_name": "webmaster"
//     },
//     "member": {
//         "username": "saytesnake",
//         "website": "",
//         "github": "",
//         "psn": "",
//         "avatar_normal": "https://cdn.v2ex.com/gravatar/e58729e3318cda032b42c4a3544d7dc4?s=24&d=retro",
//         "bio": "",
//         "url": "https://www.v2ex.com/u/saytesnake",
//         "tagline": "",
//         "twitter": "",
//         "created": 1432896468,
//         "avatar_large": "https://cdn.v2ex.com/gravatar/e58729e3318cda032b42c4a3544d7dc4?s=24&d=retro",
//         "avatar_mini": "https://cdn.v2ex.com/gravatar/e58729e3318cda032b42c4a3544d7dc4?s=24&d=retro",
//         "location": "",
//         "btc": "",
//         "id": 119578
//     },
//     "last_reply_by": "XiaoBaiYa",
//     "last_touched": 1594625394,
//     "title": "\u7528\u7535\u4fe1\u4e0d\u8212\u9002\uff0c\u771f\u4e0d\u8212\u9002...",
//     "url": "https://www.v2ex.com/t/689497",
//     "created": 1594609285,
//     "content": "1 \u3001\u53e4\u8001\u7684 BWG CN2 \u5df2\u7ecf\u653e\u5f03\u7eed\u8d39\uff0c\u5e94\u8be5\u5361\u5f97\u4e0d\u6210\u6837\u5b50\uff0c\u4e09\u5927\u6d3e\u7cfb\uff08 s \u3001v \u3001t \uff09\u90fd\u8bd5\u8fc7\u4e86\uff0c\u6cb9\u7ba1 720P \u90fd\u662f\u5962\u671b\u3002\r\n\r\n2 \u3001\u5c1d\u8bd5\u7528\u4e86\u6cb9\u7ba1\u51e0\u4e2a\u63a8\u9500\u5458\u7684 Airport and VPS\uff0c\u6211\u90fd\u4e0d\u5728\u610f\u4f60 aff \u4e86\uff0c\u4f46\u4e5f\u4e0d\u80fd\u90fd\u662f\u6e23\u6e23\u5427\uff0c\u53ef tm \u7684\u771f\u7684\u5404\u79cd\u6e23\u3002\r\n\r\n3 \u3001\u53c8\u5c1d\u8bd5\u56de BWG \u7684 justsock\uff0c\u56e0\u4e3a\u636e\u8bf4\u662f GIA\uff0c\u624d\u8212\u9002\u7528\u4e86\u4e00\u4e2a\u793c\u62dc\uff0c\u4e24\u4e2a\u6d3e\u7cfb\uff08 s \u3001t \uff09\u90fd\u5728\u7528\uff0c\u73b0\u5728\u5404\u79cd\u65ad\u6d41\uff0c\u89c1\u9b3c\u4e86\u8054\u901a 4G \u4e00\u5207\u6b63\u5e38\u3002\r\n\r\n4 \u3001gcloud \u5df2\u7ecf\u7f8a\u6bdb\u4e86\u4e24\u4e2a\u8d26\u53f7\u4e86...\u4e0d\u60f3\u518d\u7528\u4e86\uff0c\u611f\u89c9\u5bf9\u4e0d\u8d77\u8c37\u54e5\u3002\r\n\r\n\u6c42\u62ef\u6551\u3002",
//     "content_rendered": "1 \u3001\u53e4\u8001\u7684 BWG CN2 \u5df2\u7ecf\u653e\u5f03\u7eed\u8d39\uff0c\u5e94\u8be5\u5361\u5f97\u4e0d\u6210\u6837\u5b50\uff0c\u4e09\u5927\u6d3e\u7cfb\uff08 s \u3001v \u3001t \uff09\u90fd\u8bd5\u8fc7\u4e86\uff0c\u6cb9\u7ba1 720P \u90fd\u662f\u5962\u671b\u3002<br /><br />2 \u3001\u5c1d\u8bd5\u7528\u4e86\u6cb9\u7ba1\u51e0\u4e2a\u63a8\u9500\u5458\u7684 Airport and VPS\uff0c\u6211\u90fd\u4e0d\u5728\u610f\u4f60 aff \u4e86\uff0c\u4f46\u4e5f\u4e0d\u80fd\u90fd\u662f\u6e23\u6e23\u5427\uff0c\u53ef tm \u7684\u771f\u7684\u5404\u79cd\u6e23\u3002<br /><br />3 \u3001\u53c8\u5c1d\u8bd5\u56de BWG \u7684 justsock\uff0c\u56e0\u4e3a\u636e\u8bf4\u662f GIA\uff0c\u624d\u8212\u9002\u7528\u4e86\u4e00\u4e2a\u793c\u62dc\uff0c\u4e24\u4e2a\u6d3e\u7cfb\uff08 s \u3001t \uff09\u90fd\u5728\u7528\uff0c\u73b0\u5728\u5404\u79cd\u65ad\u6d41\uff0c\u89c1\u9b3c\u4e86\u8054\u901a 4G \u4e00\u5207\u6b63\u5e38\u3002<br /><br />4 \u3001gcloud \u5df2\u7ecf\u7f8a\u6bdb\u4e86\u4e24\u4e2a\u8d26\u53f7\u4e86...\u4e0d\u60f3\u518d\u7528\u4e86\uff0c\u611f\u89c9\u5bf9\u4e0d\u8d77\u8c37\u54e5\u3002<br /><br />\u6c42\u62ef\u6551\u3002",
//     "last_modified": 1594609285,
//     "replies": 53,
//     "id": 689497
// }

export default{
    state,
    mutations,
    actions,
    getters
}
