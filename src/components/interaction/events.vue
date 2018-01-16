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
                const svg = d3.select('.d3-chapter-base__inner').append('svg').attr('width', 400).attr('height', 400);
                const rect = svg.append('rect').attr('class', 'myRect').attr('x', 10).attr('y', 10).attr('fill', 'steelblue').attr('width', 100).attr('height', 100);
                // 监听事件
                rect.on('click', () => { console.log('click')});
                rect.on('click.first', () => { console.log('click.first')});
                rect.on('click.second', () => { console.log('click.second')});

                rect.on('click', null)

                // 鼠标事件
                rect.on('mouseover', () => {
                    rect.attr('fill', 'yellow');
                })
                rect.on('mouseout', () => {
                    rect.attr('fill', 'red');
                })
                

                
                const characters = ['A', 'S', 'D', 'F'];
                // 绘制矩形
                const wrappr = svg.append('g').attr('class', 'keys').attr('x', 10).attr('y', 160);
                const myRect = wrappr.selectAll('rect').data(characters).enter().append('rect')
                .attr('x', (d, i) => 10 + i * 60)
                .attr('y', 150)
                .attr('width', 55).attr('height', 55).attr('rx', 5).attr('ry', 5).attr('fill', 'black');
                // 填上文字
                wrappr.selectAll('text').data(characters).enter().append('text')
                .attr('x', (d, i) => 10 + i * 60)
                .attr('y', 150)
                .attr('dx', 20).attr('dy', 35).attr('fill', 'white').attr('font-size', 24)
                .text((d) => d);
                // 绑定键盘事件
                d3.select('body').on('keydown', () => {
                    myRect.attr('fill', (d) => {
                        if (d === String.fromCharCode(d3.event.keyCode)) {
                            return 'yellow'
                        } else {
                            return 'black'
                        }
                    })
                }).on('keyup', () => {
                    myRect.attr('fill', 'black');
                })


            },
        }
    };
</script>
