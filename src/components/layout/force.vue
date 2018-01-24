<template>
<div class="d3-chapter-base__inner">
    
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
               
            };
        },
        mounted() {
            this.init();

        },
        methods: {
            init() {
                // 创建线段画布
                const svg = d3.select('.d3-chapter-base__inner').append('svg').attr('width', 500).attr('height', 500);

                // 定义数据
                const dataSet = {
                    nodes:[
                        {name: '0'},
                        {name: '1'},
                        {name: '2'},
                        {name: '3'},
                        {name: '4'},
                        {name: '5'},
                        {name: '6'},
                        {name: '7'},
                        {name: '8'},
                        {name: '9'}
                    ],
                    links: [
                        {source: '0', target: '1'},
                        {source: '0', target: '2'},
                        {source: '0', target: '3'},
                        {source: '1', target: '4'},
                        {source: '1', target: '5'},
                        {source: '1', target: '6'},
                        {source: '2', target: '7'},
                        {source: '2', target: '8'},
                        {source: '2', target: '9'},
                    ]
                };

                // 转换数据
                const force = d3.force()

            }
        }
    };
</script>