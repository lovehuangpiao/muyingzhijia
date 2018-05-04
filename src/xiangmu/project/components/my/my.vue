<template>
    <div id="my">
        <div class="tou">
            <div class="tx iconfont icon-unie64d"></div>
            <div class="hui">
                <p>Hi <span></span></p>
                <p>普通会员</p>
            </div>
        </div>
        <div class="ding">
            <p class="dd">
                <i class="dan iconfont icon-dingdan"></i>
                <span>我的订单</span>
            </p>
            <ul class="huo">
                <li><i class="iconfont icon-fukuanfangshi"></i><span>待付款</span></li>
                <li><i class="iconfont icon-daifahuo"></i><span>待发货</span></li>
                <li><i class="iconfont icon-icon3"></i><span>待收货</span></li>
                <li><i class="iconfont icon-xin"></i><span>已完成</span></li>
                <li><i class="iconfont icon-icon5"></i><span>&nbsp;退货</span></li>
            </ul>
        </div>
        <ul class="guan">
            <li><i class="iconfont icon-daishiyongdikouquan"></i><span>抵扣券</span><strong class="iconfont icon-xiangyoujiantou"></strong></li>
            <li><i class="iconfont icon-ego-favoritefull"></i><span>我的收藏</span><strong class="iconfont icon-xiangyoujiantou"></strong></li>
            <li><i class="iconfont icon-dizhi"></i><span>地址管理</span><strong class="iconfont icon-xiangyoujiantou"></strong></li>
            <li><i class="iconfont icon-shezhi"></i><span>账户设置</span><strong class="iconfont icon-xiangyoujiantou"></strong></li>
            <li><i class="iconfont icon-wodetuangou"></i><span>我的团</span><strong class="iconfont icon-xiangyoujiantou"></strong></li>
        </ul>
        <router-link to="/login">
            <div class="tui">
                退出当前账户
            </div>
        </router-link>
        <bodyComponent></bodyComponent>
    </div>
</template>

<script type="text/javascript">
    import "./my.css"
    import bodyComponent from '../home/body/body.vue';
    import http from '../../../pei-api/utils/httpclient.js';
    // import http from '../../../pei-api/utils/httpclient.js';
    export default{
        data(){
            return{
                username:''
            }
        },
        components:{
            bodyComponent
        },
        mounted(){
            http.post('getStatus',{}).then((res) => {
                if(res.status){
                    let username = window.localStorage.getItem('username');
                    this.username = username;
                }
            })
        }
    }
</script>