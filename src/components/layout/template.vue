<template>
<div class="d3-chapter-base__wrapper">
    <p>布局（数据转换）</p>
    <div class="d3-chapter-base__tab">
        <router-link to="/pie">pie</router-link>
        <!-- <router-link to="/scatter_2">scatter_2</router-link> -->
        
    </div>
    <router-view></router-view>   
</div>
  
</template>

<style lang="scss">     
    .d3-chapter-base__tab{
        margin: 10px;
        a{
            display: inline-block;
            width: 100px;
            text-align: center;
            font-size: 13px;
            color: #666;
        }
    }
</style>
