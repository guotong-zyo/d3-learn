<template>
<div class="d3-chapter-base__wrapper">
    <p>绘制</p>
    <div class="d3-chapter-base__tab">
        <router-link to="/colors">颜色</router-link>
        <router-link to="/generators">生成器/形状</router-link>
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
