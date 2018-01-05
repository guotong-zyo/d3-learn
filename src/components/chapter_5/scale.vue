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
            this.initQuantize();
            this.initCategory();
        },
        methods: {
            init() {
                const self = this;

                // 线性比例尺
                const linear = d3
                    .scaleLinear()
                    .domain([0, 20, 80])
                    .range([0, 100, 1000]);
                console.log('线性比例尺');
                console.log(linear(10));
                console.log(linear(20));
                console.log(linear(50));
                console.log(linear(120));
                console.log(linear(13.22));
                // 不超过值域
                linear.clamp(true);
                console.log(linear(50));
                console.log(linear(120));
                // 对输出值 进行四舍五入
                linear.rangeRound([0, 100]);
                console.log(linear(13.22));

                var x = d3
                    .scaleLinear()
                    .domain([-20, 20])
                    .range([0, 100]);
                const ticks = x.ticks(5);
                console.log(ticks);
                const tickFormat = x.tickFormat(5, '+');
                console.log(ticks.map(tickFormat));

                // 指数比例尺
                const pow = d3.scalePow().exponent(0.5);
                console.log('指数比例尺');
                console.log(pow(2));
                console.log(pow(3));

                // 对数比例尺
                const log = d3.scaleLog().base(10);
                console.log('对数比例尺');
                console.log(log(100));
                console.log(log(1000));

                // 时间比例尺
                const time = d3
                    .scaleTime()
                    .domain([new Date(2000, 0, 1), new Date(2000, 0, 2)])
                    .range([0, 100]);
                console.log('时间比例尺');
                console.log(time(new Date(2000, 0, 1, 5)));
                console.log(x.invert(200));

                // 量化比例尺
                const quantize = d3
                    .scaleQuantize()
                    .domain([0, 10])
                    .range(['red', 'green', 'blue', 'yellow', 'black']);
                console.log(`量化比例尺`);
                console.log(quantize(1));
                console.log(quantize(3));
                console.log(quantize(5.999));
                console.log(quantize(6));
                console.log(quantize(9));

                // 分位比例尺
                const quantile = d3
                    .scaleQuantile()
                    .domain([0, 2, 4, 10])
                    .range([1, 100]);
                console.log(`分位比例尺`);
                console.log(quantile.quantiles());
                console.log(quantile(2));
                console.log(quantile(6));
                console.log(quantile(9));

                // 阈值比例尺
                const threshold = d3
                    .scaleThreshold()
                    .domain([10, 20, 30])
                    .range(['red', 'green', 'blue', 'black']);
                console.log(`阈值比例尺`);
                console.log(quantile.quantiles());
                console.log(quantile(2));
                console.log(quantile(6));
                console.log(quantile(9));

                // 序数比例尺
                const ordinal = d3.scaleOrdinal().domain([1,2,3,4,5]).range([10,20,30,40,50]);
                console.log(`序数比例尺`);
                console.log(ordinal(1));
                console.log(ordinal(3));
                console.log(ordinal(5));
                console.log(ordinal(8));

                // 分段比例尺
                const band = d3.scaleBand().domain([1,2,3,4,5,6,7]).range([0, 100]).padding(10).round(true);
                console.log(`分段比例尺`);
                console.log(band(1));
                console.log(band(3));
                console.log(band(5));
                console.log(band(7));
                console.log(band.bandwidth());

                // 点比例尺
                const point = d3.scalePoint().domain([1,2,3,4,5,6,7]).range([0, 100]).padding(10).round(true);
                console.log(`点比例尺`);
                console.log(point(1));
                console.log(point(3));
                console.log(point(5));
                console.log(point(7));
                console.log(band.align());

                // 颜色序数比例尺
                const color = d3.scaleOrdinal(d3.schemeCategory10);

            },
            initQuantize() {
                const quantize = d3
                    .scaleQuantize()
                    .domain([0, 50])
                    .range(['#666', '#888', '#aaa', '#ccc', '#eee']);
                const r = [45, 35, 25, 15, 5];

                const svg = d3
                    .select('.d3-chapter-base__scale')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 400);

                svg
                    .selectAll('circle')
                    .data(r)
                    .enter()
                    .append('circle')
                    .attr('cx', (d, i) => 50 + i * 30)
                    .attr('cy', 50)
                    .attr('r', d => d)
                    .attr('fill', d => quantize(d));
            },

            initCategory (){
                 const quantize = d3
                    .scaleOrdinal()
                    .domain([0, 100])
                    .range(d3.schemeCategory10);
                const r = [95, 85, 75, 65, 55, 45, 35, 25, 15, 5];
                const svg = d3
                    .select('.d3-chapter-base__scale')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 400);

                svg
                    .selectAll('circle')
                    .data(r)
                    .enter()
                    .append('circle')
                    .attr('cx', (d, i) => 50 + i * 40)
                    .attr('cy', 100)
                    .attr('r', d => d)
                    .attr('fill', d => quantize(d));
            }
        }
    };
</script>