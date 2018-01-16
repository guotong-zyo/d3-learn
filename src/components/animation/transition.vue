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
            init() {
                const t = d3
                    .transition()
                    .duration(1750)
                    .ease(d3.easeLinear);

                const svg = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .attr('width', 500)
                    .attr('height', 500);

                svg
                    .append('rect')
                    .attr('fill', 'steelblue')
                    .attr('x', 10)
                    .attr('y', 10)
                    .attr('width', 100)
                    .attr('height', 30)
                    .transition()
                    .attr('width', 300)
                    .transition()
                    .attr('width', 100)
                    .transition()
                    .ease(d3.easeBounceOut)
                    .attr('width', 400);

                const rect = svg
                    .append('rect')
                    .attr('fill', 'steelblue')
                    .attr('x', 10)
                    .attr('y', 50)
                    .attr('width', 100)
                    .attr('height', 30);

                const rectTran = rect
                    .transition()
                    .delay(500)
                    .duration(2000)
                    .attrTween('width', () => t => 100 + t * 300);

                const text = svg
                    .append('text')
                    .attr('fill', 'white')
                    .attr('x', 100)
                    .attr('y', 50)
                    .attr('dy', '1.2em')
                    .attr('text-anchor', 'end')
                    .text(100);

                const initX = text.attr('x');
                const initText = text.text();

                const textTran = text
                    .transition()
                    .delay(500)
                    .duration(2000)
                    .tween('text', () => t => {
                        text.attr('x', Number(initX) + t * 300).text(Math.floor(Number(initText) + t * 300));
                    })
                    .remove();

                const dataSet = [100, 100, 100];

                const g = svg.append('g');
                const children = g
                    .selectAll('rect')
                    .data(dataSet)
                    .enter()
                    .append('rect')
                    .attr('fill', 'steelblue')
                    .attr('id', (d, i) => 'rect' + i)
                    .attr('x', 10)
                    .attr('y', (d, i) => 100 + i * 40)
                    .attr('width', (d, i) => d)
                    .attr('height', 30);

                // g.transition().select('#rect1').attr('width', 400);
                // g.transition().selectAll('rect').attr('width', 400);
                g.transition()
                    .delay(1000)
                    .duration(2000)
                    .selectAll('rect')
                    .on('start', (d, i) => { console.log('start') })
                    .on('end', (d, i) => { console.log('end') })
                    .on('interrupt', (d, i) => { console.log('interrupt') })
                    .attr('width', 400);

                setTimeout(() => {
                    g.transition().select('#rect1').attr('width', 200)
                }, 2000);
            }
        }
    };
</script>
