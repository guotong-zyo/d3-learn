<template>
<div class="d3-chapter-base__inner">
    <div class="d3-chapter-base__barchart"></div>
    <p>
        <button type="button" @click="mysort" >排序</button>
        <button type="button" @click="myadd" >增加数据</button>
    </p>
   
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
                numbers: [50, 43, 120, 87, 99, 167, 142],
                width: 400,
                height: 300,
                // 上下左右的内边距
                padding: { top: 20, right: 20, bottom: 20, left: 20 },
                // 每个矩形所占的宽度包括空白
                rectStep: 35,
                // 每个矩形所占的宽度 不包括空白
                rectWidth: 30,
                svg: null,
                sortFlag: false
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                const self = this;
                // 创建SVG
                self.svg = d3
                    .select('.d3-chapter-base__barchart')
                    .append('svg')
                    .attr('width', self.width)
                    .attr('height', self.height);
                this.draw();
            },
            draw() {
                const self = this;
                // 获取矩形update部分
                const updateRect = self.svg.selectAll('rect').data(self.numbers);
                // 获取矩形enter部分
                const enterRect = updateRect.enter();
                // 获取矩形exit部分
                const exitRect = updateRect.exit();
                // 处理矩形update部分
                updateRect.attr('fill', 'steelblue')
                    .attr('x', (d, i) => self.padding.left + i * self.rectStep)
                    .attr('y', d => self.height - self.padding.bottom - d)
                    .attr('width', self.rectWidth)
                    .attr('height', d => d);
                // 处理矩形enter部分
                enterRect.append('rect').attr('fill', 'steelblue')
                    .attr('x', (d, i) => self.padding.left + i * self.rectStep)
                    .attr('y', d => self.height - self.padding.bottom - d)
                    .attr('width', self.rectWidth)
                    .attr('height', d => d);
                // 处理矩形exit部分
                exitRect.remove();

                // 获取文字update部分
                const updateText = self.svg.selectAll('text').data(self.numbers);
                // 获取文字enter部分
                const enterText = updateText.enter();
                // 获取文字exit部分
                const exitText = updateText.exit();

                // 处理文字的update的部分
                updateText.attr('fill', 'white')
                    .attr('font-size', '13px')
                    .attr('text-anchor', 'middle')
                    .attr('x', (d, i) => self.padding.left + i * self.rectStep)
                    .attr('y', d => self.height - self.padding.bottom - d)
                    .attr('dx', self.rectWidth / 2)
                    .attr('dy', '1em')
                    .text(d => d);
                // 处理文字的enter的部分
                enterText.append('text').attr('fill', 'white')
                    .attr('font-size', '13px')
                    .attr('text-anchor', 'middle')
                    .attr('x', (d, i) => self.padding.left + i * self.rectStep)
                    .attr('y', d => self.height - self.padding.bottom - d)
                    .attr('dx', self.rectWidth / 2)
                    .attr('dy', '1em')
                    .text(d => d);
                // 处理文字的exit的部分
                exitText.remove();

            },
            mysort() {
                this.numbers.sort(this.sortFlag ? d3.ascending : d3.descending);
                this.sortFlag = !this.sortFlag
                this.draw();
            },
            myadd() {
                this.numbers.push(Math.floor(Math.random() * 100));
                this.draw();
            }
        }
    };
</script>