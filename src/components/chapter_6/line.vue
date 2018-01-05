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
                const lineSvg = d3.select('.d3-chapter-base__inner').append('svg').attr('width', 400).attr('height', 400);
                const lines_1 = [[30, 30], [280, 60], [280,80], [100, 80]];
                const line_1 = d3.line();
                lineSvg.append('path').attr('d', line_1(lines_1)).attr('stroke', 'black ').attr('stroke-width', '3px').attr('fill', 'none');

                const lines_2 = [80, 120, 160, 200, 240, 280];
                const line_2 = d3.line().x(d => d).y((d, i) => i%2 === 0 ? 120 : 180).curve(d3.curveStep);
                lineSvg.append('path').attr('d', line_2(lines_2)).attr('stroke', 'black').attr('stroke-width', '3px').attr('fill', 'none');

                const lines_3 = [180, 220, 260, 300, 340, 380];
                const line_3 = d3.line().x(d => d).y((d, i) => i%2 === 0 ? 220 : 280).defined((d) => d < 300 );
                lineSvg.append('path').attr('d', line_3(lines_3)).attr('stroke', 'black').attr('stroke-width', '3px').attr('fill', 'none');

            }
        }
    };
</script>