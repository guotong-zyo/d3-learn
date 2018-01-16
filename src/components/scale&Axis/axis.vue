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
                numbers: [50, 43, 120, 87, 99, 167, 142]
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
                    .attr('class', 'axis')
                    .attr('width', 400)
                    .attr('height', 400);

                // 用于坐标轴的线性比例尺
                const sXcale = d3
                    .scaleLinear()
                    .domain([0, 10])
                    .range([0, 400]);

                const pow = d3
                    .scalePow()
                    .exponent(2)
                    .domain([0, 1])
                    .range([0, 400]);

                const log = d3
                    .scaleLog()
                    .domain([0.01, 1])
                    .range([0, 400]);


                // 定义做坐标轴
                const axisLinear = d3.axisBottom(sXcale).tickFormat(d3.format('$0.1f'));
                const axisPow = d3.axisBottom(pow);
                const axisLog = d3.axisBottom(log);

                const axisLeft = d3.axisLeft(sXcale).ticks(5);

                const axisRight = d3.axisRight(sXcale).tickValues([2, 4, 6, 8, 10]);

                const axisTop = d3
                    .axisTop(sXcale)
                    .ticks(5)
                    .tickSize(20, 50);

                const gAxis1 = svg.append('g').attr('transform', 'translate(20,20)');
                const gAxis2 = svg.append('g').attr('transform', 'translate(20,80)');
                const gAxis3 = svg.append('g').attr('transform', 'translate(20,120)');

                axisLinear(gAxis1);
                axisPow(gAxis2);
                axisLog(gAxis3);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .axis {
        font-size: 11px;
    }
</style>
