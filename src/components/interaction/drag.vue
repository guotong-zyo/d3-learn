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
                const svg = d3.select('.d3-chapter-base__inner').append('svg').attr('width', 400).attr('height', 400);
                const dataSet = [{cx: 150, cy: 200, r: 30}, { cx: 350, cy: 200, r: 30}]

                const drag = d3.drag()
                .on('start', (d) => {
                    console.log('start')
                }).on('end', (d) => {
                    console.log('end')
                }).on('drag', function(d){
                    d3.select(this).attr('cx', d.cx = d3.event.x).attr('cy', d.cx = d3.event.y)
                });
                
                const circle = svg.selectAll('circle').data(dataSet).enter().append('circle')
                .attr('cx', d => d.cx).attr('cy', d => d.cy).attr('r', d => d.r).attr('fill', 'black').call(drag);
            }
        }
    };
</script>
