<template>
<div class="d3-chapter-base__wrapper">
    <p>交互</p>
    <div class="d3-chapter-base__tab">
        <router-link to="/events">events</router-link>
        <router-link to="/drag">drag</router-link>
        <router-link to="/zoom">zoom</router-link>
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
