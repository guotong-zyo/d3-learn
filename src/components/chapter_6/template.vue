<template>
<div class="d3-chapter-base__wrapper">
    <p>绘制</p>
    <div class="d3-chapter-base__tab">
        <router-link to="/colors">colors</router-link>
        <router-link to="/line">line</router-link>
        <router-link to="/area">area</router-link>
        <router-link to="/arcs">arcs</router-link>
        <router-link to="/lineChart">lineChart</router-link>
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
