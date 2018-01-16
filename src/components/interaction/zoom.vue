<template>
<div class="d3-chapter-base__inner">
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {};
        },
        mounted() {
            this.init();
        },
        methods: {
            init(){
                const dataSet = [
                    {cx: 150, cy: 200, r: 30},
                    {cx: 220, cy: 200, r: 30},
                    {cx: 150, cy: 270, r: 30},
                    {cx: 220, cy: 270, r: 30}
                ];
                const zoom = d3.zoom().scaleExtent([1, 10])
                .on('zoom', function(d){
                    console.log(d3.event);
                    d3.select(this).attr('transform', d3.event.transform);
                })
                // 开始绘制
                const svg = d3.select('.d3-chapter-base__inner').append('svg').attr('width', 400).attr('height', 400);
                const g = svg.append('g').call(zoom);
                g.selectAll('circle').data(dataSet).enter().append('circle')
                .attr('cx', d => d.cx).attr('cy', d => d.cy).attr('r', d => d.r).attr('fill', 'steelblue');
            }
        }
    };
</script>
