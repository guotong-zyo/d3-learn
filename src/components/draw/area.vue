<template>
<div class="d3-chapter-base__inner">
    
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
                dataSet: [80, 120, 130, 70, 60, 90]
            };
        },
        mounted() {
            this.init()
            this.initAreaChart();
        },
        methods: {
            init() {
                const self = this;
                // 创建画布
                const svg = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 400);

                const area = d3
                    .area()
                    .x((d, i) => 50 + i * 80)
                    .y0((d, i) => 200)
                    .y1(d => 200 - d);

                svg
                    .append('path')
                    .attr('d', area(self.dataSet))
                    .attr('stroke', 'black')
                    .attr('stroke-width', '3px')
                    .attr('fill', 'yellow');
            },
            initAreaChart() {
                // 创建数据
                const data = d3.range(40).map((i) => i % 5 ? {x: i / 39, y: (Math.sin(i / 3) + 2) / 4} : null);
                const margin = {top: 40, right: 40, bottom: 40, left: 40};
                const width = 960 - margin.left - margin.right;
                const height = 500 - margin.top - margin.bottom;

                

                // 创建坐标轴的线性比例尺
                const x = d3.scaleLinear().range([0, width]);
                const y = d3.scaleLinear().range([height, 0]);

                // 创建line
                const line = d3.line().defined(d => d).x(d => x(d.x)).y(d => y(d.y));
                // 创建area
                const area = d3.area().defined(line.defined()).x(line.x()).y1(line.y()).y0(y(0));

                console.log()

                // 创建画布
                const svg = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .datum(data)
                    .attr('width', 960)
                    .attr('height', 500)
                    .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                // 开始绘制
                ;
                // 绘制坐标横轴
                svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));
                // 绘制坐标纵轴
                svg.append("g").call(d3.axisLeft(y));
                // 绘制曲线和区域
                svg.append("path").attr("d", line).attr("fill", "none").attr('stroke', 'steelblue').attr('stroke-width', ' 1.5px');
                svg.append("path").attr("d", area).attr("fill", "lightsteelblue");
                // 绘制点
                svg.selectAll("circle").data(data.filter(d => d)).enter().append('circle').attr('cx', line.x()).attr('cy', line.y()).attr('r', 3.5).attr("fill", "white").attr('stroke', 'steelblue').attr('stroke-width', '1.5px');
              
            }
        }
    };
</script>
