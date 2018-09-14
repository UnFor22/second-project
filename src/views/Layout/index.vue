<template>
    <div class="container" id="main">
        <div class="header">
            <h1>头部</h1>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <router-link :to='{path:"/home"}'>
                        首页
                    </router-link>
                </li>
                <li>
                    <router-link :to='{path:"/about/:id"}'>
                        详情页
                    </router-link>
                </li>
                
            </ul>
        </div>
        <div class="main-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main'
    }
</script>

<style scoped lang='scss'>
.header {
    text-align: center;
    line-height: 60px;
    background: #0ff;
    z-index: 996;
    height: 60px;
    width: 100%;
}
.nav {
    position: fixed;
    text-align: center;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    width: 200px;
    background: #273647;
}
.main-container{
    
    padding-left: 200px;
    background-color: #f00;
}
.nav{
    li{
        height: 50px;
        line-height: 50px;
        text-align: center;
        
    }
}
</style>