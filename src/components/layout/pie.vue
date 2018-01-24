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
                const dataSet = [
                    ['小米', 60.8],
                    ['三星', 58.4],
                    ['联想', 47.3],
                    ['苹果', 46.4],
                    ['华为', 41.3],
                    ['酷派', 40.1],
                    ['其他', 111.5]
                ];
                // 定义颜色
                const colors = d3.scaleOrdinal(d3.schemeCategory20);
                // transform data
                const pie = d3.pie().value(d => d[1]);
                const pieData = pie(dataSet);
                // 绘制
                const outerRadius = 130;
                const innerRadius = 0;

                // 创建弧生成器
                const arc = d3.arc().outerRadius(outerRadius).innerRadius(innerRadius);
                
                // 画出饼图
                const arcs = svg.selectAll('g').data(pieData).enter().append('g').attr('transform', 'translate(250, 250)')
                arcs.append('path').attr('fill',(d, i) => colors(i)).attr('d', d => arc(d));
                // 添加弧内文字元素
                arcs.append('text')
                .attr('transform', d => `translate(${arc.centroid(d)[0] * 1.4}, ${arc.centroid(d)[1] * 1.4})`)
                .attr('text-anchor', 'middle')
                .attr('fill', 'white')
                .attr('font-size', 12)
                .text((d) => {
                    const percent = Number(d.value) / d3.sum(dataSet, d => d[1]) * 100;
                    return percent.toFixed(2) + '%'
                })
                // 添加链接弧外文字的直线元素
                arcs.append('line').attr('stroke', '#666')
                .attr('x1', (d) => arc.centroid(d)[0] * 2)
                .attr('y1', (d) => arc.centroid(d)[1] * 2)
                .attr('x2', (d) => arc.centroid(d)[0] * 2.2)
                .attr('y2', (d) => arc.centroid(d)[1] * 2.2)

                // 添加弧外文字元素
                arcs.append('text')
                .attr('transform', d => `translate(${arc.centroid(d)[0] * 2.5}, ${arc.centroid(d)[1] * 2.5})`)
                .attr('text-anchor', 'middle')
                .attr('fill', '#333')
                .attr('font-size', 12)
                .text(d => d.data[0])


            }
        }
    };
</script>