<template>
<div class="d3-chapter-base__inner">
    <div class="d3-chapter-base__inner_chart"></div>
    <p>
        <button type="button" @click="update"> 更新</button>
        <button type="button" @click="add"> 增加</button>
        <button type="button" @click="sub"> 减少</button>
    </p>
</div>

</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
                dataSet: [[0.5, 0.5], [0.7, 0.8], [0.4, 0.9], [0.11, 0.32], [0.88, 0.25], [0.75, 0.12], [0.5, 0.1], [0.2, 0.3], [0.4, 0.1], [0.6, 0.7]],
                padding: {top: 30, right: 30, bottom: 30, left: 30},
                height: 500,
                width: 500,
                xAxisWidth: 300,
                yAxisWidth: 300,
                svg: null,
                xScale: null,
                yScale: null
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init(){
                const self = this;
                self.svg = d3
                    .select('.d3-chapter-base__inner_chart')
                    .append('svg')
                    .attr('width', 500)
                    .attr('height', 500);
                // 比例尺
                self.xScale = d3.scaleLinear().domain([0,1]).range([0, self.xAxisWidth]);
                self.yScale = d3.scaleLinear().domain([0,1]).range([self.yAxisWidth, 0]);
                if(self.svg){
                    // 绘制散点
                    self.drawCircle();
                    // 开始绘制
                    self.drawAxis();
                }
              

            },
            drawCircle(){
                const self = this;
                const circleUpdate = self.svg.selectAll('circle').data(self.dataSet);
                const circleEnter = circleUpdate.enter();
                const circleExit = circleUpdate.exit();

                // update 部分的处理方法，使用过渡的方式，缓缓移动到新坐标位置
                circleUpdate.transition().duration(500).attr('cx', d => self.padding.left + self.xScale(d[0])).attr('cy', d => self.height - self.padding.bottom - self.yScale(d[1]))
                // enter 部分的处理方法，插入到坐标原点，然后过渡到目标点
                circleEnter.append('circle').attr('fill', 'black').attr('cx', self.padding.left).attr('cy', self.height - self.padding.bottom).attr('r', 7)
                .transition().duration(500).attr('cx', d => self.padding.left + self.xScale(d[0])).attr('cy', d => self.height - self.padding.bottom - self.yScale(d[1]));
                // exit 部分处理方法，慢慢 变成白色 最后删除
                circleExit.transition().duration(500).attr('fill', 'white').remove();
            },
            drawAxis(){
                const self = this;
                // 坐标轴
                const xAxis = d3.axisBottom(self.xScale).ticks(5);   // x轴
                const yAxis = d3.axisLeft(self.yScale).ticks(5);   // y轴
                // 绘制坐标轴
                self.svg.append('g').attr('class', 'xAxis').attr('transform', `translate(${self.padding.left}, ${self.height - self.padding.bottom})`).call(xAxis);
                self.svg.append('g').attr('class', 'yAxis').attr('transform', `translate(${self.padding.left}, ${self.height - self.padding.bottom - self.yAxisWidth})`).call(yAxis);

            },
            update(){
                for (let i = 0; i < this.dataSet.length; i++) {
                    this.dataSet[i][0] = Number(Math.random().toFixed(2));
                    this.dataSet[i][1] = Number(Math.random().toFixed(2));
                }
                this.drawCircle();
            },
            add(){
                // 添加新点
                this.dataSet.push([Number(Math.random().toFixed(2)), Number(Math.random().toFixed(2))])
                this.drawCircle();
            },
            sub(){
                this.dataSet.pop();
                this.drawCircle();
            }
        }
    };
</script>
