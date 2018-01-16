<template>
<div class="d3-chapter-base__inner">
    
</div>
  
</template>
<script>
    import * as d3 from 'd3';
    export default {
        data() {
            return {
                dataSet: [
                    {
                        country: "china",
                        gdp: [[2000,11920],[2001,13170],[2002,14550],
                            [2003,16500],[2004,19440],[2005,22870],
                            [2006,27930],[2007,35040],[2008,45470],
                            [2009,51050],[2010,59490],[2011,73140],
                            [2012,83860],[2013,103550]]
                    },
                    {
                        country: "japan",
                        gdp: [[2000,47310],[2001,41590],[2002,39800],
                                [2003,43020],[2004,46550],[2005,45710],
                                [2006,43560],[2007,43560],[2008,48490],
                                [2009,50350],[2010,54950],[2011,59050],
                                [2012,59370],[2013,48980]]
                    }
                ]
            };
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                const self = this;
                const width = 500;
                const height = 500;
                const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
                const padding = {top: 50, right: 50, bottom: 50, left: 50 }
                let gdpMax = 0;
                

                // 获取数据中的最大值
                self.dataSet.forEach((e) => {
                    const curGdp = d3.max(e.gdp, d => d[1]);
                    if (curGdp > gdpMax) {
                        gdpMax = curGdp
                    }
                });

                 // 创建坐标轴比例尺
                const xScale = d3.scaleLinear().domain([2000, 2013]).range([0, width - padding.left - padding.right]);
                const yScale = d3.scaleLinear().domain([0, gdpMax * 1.1 ]).range([height - padding.top - padding.bottom, 0]);

                // 创建坐标轴
                const xAxis = d3.axisBottom(xScale).ticks(5);
                const yAxis = d3.axisLeft(yScale);
                
                // 创建line
                const line = d3.line().x(d => xScale(d[0])).y(d => yScale(d[1])).curve(d3.curveCardinal.tension(0.1));

                // 创建画布
                const svg = d3.select('.d3-chapter-base__inner').append('svg').attr('width', width).attr('height', height);

                // 绘制路径
                svg.selectAll('path')
                    .data(self.dataSet)
                    .enter()
                    .append('path')
                    .attr('transform', 'translate('+ padding.left +', '+ padding.top +')')
                    .attr('d', d => line(d.gdp))
                    .attr('fill', 'none')
                    .attr('stroke-width', 3)
                    .attr('stroke', (d, i) => colors[i]);

                // 创建图例
                const markStep = 80;
	
                const gMark = svg.selectAll(".gMark")
                                .data(self.dataSet)
                                .enter()
                                .append("g")
                                .attr("transform",function(d,i){
                                    return "translate(" + (padding.left + i * markStep)  + "," + ( height - padding.bottom + 40)  +")";
                                });
                    
                gMark.append("rect")
                        .attr("x",0)
                        .attr("y",0)
                        .attr("width",10)
                        .attr("height",10)
                        .attr("fill",function(d,i){ return colors[i]; });

                gMark.append("text")
                        .attr("dx",15)
                        .attr("dy",".5em")
                        .attr("fill","black")
                        .text(function(d){ return d.country; });

                // 绘制坐标轴
                svg.append("g").attr("transform", "translate(" + padding.left + ", " + (height - padding.bottom) + ")").call(xAxis);
                svg.append("g").attr("transform", "translate(" + padding.left + ", " + padding.top + ")").call(yAxis);
                

                
                                
                

                
       
            }
        }
    }
</script>
