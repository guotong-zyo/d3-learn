<template>
    <div class="d3-sidebar">
        <ul class="d3-sidebar__content">
            <li class="d3-sidebar__item">
                <router-link to="svg">svg-基础</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="canvas">canvas-基础</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="selection&data">4-选择集与数据</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="scale&Axis">5-比例尺和坐标</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="draw">6-绘制</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="animation">7-动画</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="interaction">8-交互</router-link>
            </li>
            <li class="d3-sidebar__item">
                <router-link to="layout">10-布局</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .d3-sidebar__content {
        padding: 0;
        margin: 0;
        .d3-sidebar__item {
            list-style: none;
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            a {
                font-size: 13px;
                color: #666;
            }
        }
    }
</style>
