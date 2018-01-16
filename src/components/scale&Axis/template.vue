<template>
<div class="d3-chapter-base__wrapper">
    <p>比例尺和坐标</p>
    <div class="d3-chapter-base__tab">
        <router-link to="/scale">比例尺</router-link>
        <router-link to="/axis">坐标轴</router-link>
        <router-link to="/scatter">散点图</router-link>
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
