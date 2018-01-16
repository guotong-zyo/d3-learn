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
            this.init()
            this.initPie();

        },
        methods: {
            init() {
                const svg = d3
                    .select('.d3-chapter-base__inner')
                    .append('svg')
                    .attr('width', 400)
                    .attr('height', 400);
                const dataSet = {startAngle: 0 , endAngle: Math.PI * 0.75 };
                const arc = d3.arc().innerRadius(50).outerRadius(100);

                svg.append('path').attr('d', arc(dataSet)).attr('transform', 'translate(250, 250)').attr('fill', 'yellow').attr('stroke', 'steelblue').attr('stroke-width', '1.5px');
            },
            initPie() {
                 const svg = d3
                    .select('.d3-chapter-base__inner')
                    .append('canvas')
                    .attr('width', 400)
                    .attr('height', 400);
                const canvas = document.querySelector('canvas');
                const context = canvas.getContext('2d');
                const width = canvas.width;
                const height = canvas.height;
                const radius = Math.min(width, height) / 2;
                const colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

                const arc = d3.arc().outerRadius(radius - 10).innerRadius(radius - 70).context(context);
                const labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius- 40).context(context);
                const pie = d3.pie().sort(null).value(d => d.population);

                context.translate(width / 2, height / 2);

                const data = [
                    {age: '< 5', population: 2704659},
                    {age: '5-13', population: 4499890},
                    {age: '14-17', population: 2159981},
                    {age: '18-24', population: 3853788},
                    {age: '25-44', population: 14106543},
                    {age: '45-64', population: 8819342},
                    {age: '≥ 65', population: 612463}
                ];

                const arcs = pie(data);

                arcs.forEach((element, index) => {
                    context.beginPath();
                    arc(element);
                    console.log(element);
                    context.fillStyle = colors[index];
                    context.fill()
                });
                context.beginPath();
                console.log(arcs)
                arcs.forEach(arc);
                context.strokeStyle = "#fff";
                context.stroke();

                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillStyle = "#fff";
                arcs.forEach(function(d) {
                    var c = labelArc.centroid(d);
                    context.fillText(d.data.age, c[0], c[1]);
                });
                
            }
        }
    };
</script>
