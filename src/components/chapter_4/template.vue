<template>
<div class="d3-chapter-base__wrapper">
    <p>选择集和数据</p>
    <div class="d3-chapter-base__tab">
        <router-link to="/selection">选择集</router-link>
        <router-link to="/dataJoin">数据绑定</router-link>
        <router-link to="/methods">常用方法</router-link>
        <router-link to="/barChart">柱状图</router-link>
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
