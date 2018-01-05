<template>
    <div>
        <p class="global-title">{{ msg }}</p>
        <div class="container--wrap">
            <div class="sidebar--wrap">
                <d3-sidebar></d3-sidebar>    
            </div>
            <div class="content--wrap">
                <div class="content--wrap__inner">
                    <router-view class="content" :key="routeKeyStamp"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import sidebar from './sidebar';
    export default {
        name: 'd3-base',
        components: {
            'd3-sidebar': sidebar
        },
        data() {
            return {
                msg : 'Welcome to my d3-learn',
                routeKeyStamp: new Date().valueOf()
            }
        }
    }
</script>
<style lang="scss">
    body,html {
        padding: 0;
        margin: 0;
    }
    .global-title{
        padding-left: 20px;
        font-size: 14px;
        color: #666;
    }
        
    .container--wrap{
        border-top: 1px solid #efefef;
        clear: both;
    }
    .sidebar--wrap{
        float: left;
        width: 200px;
        border-right: 1px solid #efefef;
    }
    .content--wrap{
        margin-left: 201px;
        .content--wrap__inner{
            padding: 10px;
        }
    }
</style>
