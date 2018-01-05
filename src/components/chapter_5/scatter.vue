<template>
<div class="d3-chapter-base__inner">
    <div class="d3-chapter-base__scale"></div>
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
                centers: [[0.5, 0.5], [0.7, 0.8], [0.4, 0.9], [0.11, 0.32], [0.88, 0.25], [0.75, 0.12], [0.5, 0.1], [0.2, 0.3], [0.4, 0.1], [0.6, 0.7]],
                width: 400,
                height: 400,
                //x轴宽度
                xAxisWidth: 300,
                //y轴宽度
                yAxisWidth: 300
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                const self = this;
                // 创建画布
                const svg = d3
                    .select('.d3-chapter-base__scale')
                    .append('svg')
                    .attr('width', self.width)
                    .attr('height', self.height);

                const xScale = d3.scaleLinear().domain([0, 1.2 * d3.max(self.centers, (d) => d[0])])
                                .range([0, self.xAxisWidth]);

                const yScale = d3.scaleLinear().domain([0, 1.2 * d3.max(self.centers, (d) => d[1])])
                                .range([self.yAxisWidth, 0]);

                const padding = {top: 30, right: 30, bottom: 30, left: 30};
                // 定义比例尺
                const xAxisLinear = d3.axisBottom(xScale).ticks(5);
                const yAxisLinear = d3.axisLeft(yScale).ticks(5);

                // 绘制
                const xAxis = svg.append('g').attr('class', 'xAxis').attr('transform', 'translate('+ padding.left +','+ (self.height - padding.bottom)+')').call(xAxisLinear);
                const yAxis = svg.append('g').attr('class', 'yAxis').attr('transform', 'translate('+ padding.left +','+ (self.height - padding.bottom - self.yAxisWidth) +')').call(yAxisLinear);
                // 绘制散点
                const circle = svg.selectAll('circle')
                                    .data(self.centers)
                                    .enter()
                                    .append('circle')
                                    .attr('fill', 'black')
                                    .attr('cx', (d) => padding.left + xScale(d[0]))
                                    .attr('cy', (d) => self.height - padding.bottom - yScale(d[1]))
                                    .attr('r', 5)
            }
        }
    };
</script>

<style lang="scss" scoped>
    .axis {
        font-size: 11px;
    }
</style>
