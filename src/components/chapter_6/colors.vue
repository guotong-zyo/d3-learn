<template>
<div class="d3-chapter-base__inner">
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
               numbers: [1,2,3,4,5]
            };
        },
        mounted() {
            this.init();

        },
        methods: {
          init() {
                const self = this;
                // 创建画布
                const svg1 = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 100);

                const svg2 = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 100);
                
                const svg3 = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 100);

                const colors_1 = [
                    d3.rgb(40, 80, 0),
                    d3.rgb('red'),
                    d3.rgb('rgb(0, 255, 255)'),
                    d3.rgb(40, 80, 0).brighter(2),
                    d3.rgb(40, 80, 0).darker(2)
                ]

                const colors_2 = [
                    d3.hsl(120, 1.0, 0.5),
                    d3.hsl('red'),
                    d3.hsl('hsl(120, 1.0, 0.5)'),
                    d3.hsl(120, 1.0, 0.5).brighter(2),
                    d3.hsl(120, 1.0, 0.5).darker(2)
                ]
                // 计算插值
                const colors_3 = d3.interpolate(d3.rgb(255, 0, 0), d3.rgb(0, 255, 0))

                svg1.selectAll('circle').data(self.numbers).enter().append('circle').attr('cx', (d, i) => d * 50).attr('cy', 50).attr('r', 20).attr('fill', (d, i) => colors_1[i]);
                svg2.selectAll('circle').data(self.numbers).enter().append('circle').attr('cx', (d, i) => d * 50).attr('cy', 50).attr('r', 20).attr('fill', (d, i) => colors_2[i]);
                svg3.selectAll('circle').data(self.numbers).enter().append('circle').attr('cx', (d, i) => d * 50).attr('cy', 50).attr('r', 20).attr('fill', (d, i) => colors_3(d * 0.2));

          }
        }
    };
</script>