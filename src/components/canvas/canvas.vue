<template>
<div class="d3-canvas-base__wrapper">
    <p>Canvas基础</p>
    <ul class="d3-canvas-base__tab">
        <li><a href="javascript:;" @click="renderLine">渲染线段</a></li>
        <li><a href="javascript:;" @click="renderdRect">渲染矩形</a></li>
        <li><a href="javascript:;" @click="renderdCricle">渲染圆形</a></li>
        <li><a href="javascript:;" @click="renderPolygon">渲染多边形</a></li>
        <li><a href="javascript:;" @click="renderCurve">渲染二次曲线</a></li>
        <li><a href="javascript:;" @click="renderBezierCurve">渲染贝塞尔曲线</a></li>
        <li><a href="javascript:;" @click="renderText">再来一段文字</a></li>
    </ul>
    <div class="d3-canvas-base__content">
        <canvas ref="mycanvas" width="960" height="600"></canvas>
    </div>
</div>
  
</template>
<script>
export default {
    name: 'd3-canvas',
    data() {
        return {
            ctx: null,
            width: 0,
            height: 0
        }
    },
    mounted(){
        const canvas = this.$refs.mycanvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
    },
    methods: {
        renderLine() {
            if (this.ctx) {
                this.ctx.save();
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 5;
                this.ctx.beginPath();
                this.ctx.moveTo(10,10);
                this.ctx.lineTo(100,100);
                this.ctx.stroke();
                this.ctx.restore();
            } else {
                console.error('not fond')
            }
        },
        renderdRect() {
            if (this.ctx) {
                this.ctx.save();
                const linearGrad = this.ctx.createLinearGradient(100, 0, 250, 0)
                linearGrad.addColorStop(0, 'blue')
                linearGrad.addColorStop(1, 'white')
               
                this.ctx.strokeStyle = 'black';
                this.ctx.fillStyle = linearGrad;
                this.ctx.lineWidth = 5;
                this.ctx.scale(2, 3);
                this.ctx.rect(140, 10, 100, 90);
                this.ctx.fill();
                this.ctx.stroke();
                this.ctx.restore();
            } else {
                console.error('not fond')
            }
        },
        renderdCricle() {
            if (this.ctx) {
                this.ctx.save();
                const radialGrad = this.ctx.createRadialGradient(375, 150, 10, 375, 150, 100)
                radialGrad.addColorStop(0, 'blue')
                radialGrad.addColorStop(1, 'white')
                this.ctx.strokeStyle = 'black';
                this.ctx.fillStyle = radialGrad;
                this.ctx.lineWidth = 5;
                this.ctx.translate(0, 400);
                this.ctx.beginPath();
                this.ctx.arc(320, 55, 50, 0, Math.PI*2);
                this.ctx.fill();
                this.ctx.stroke();
                this.ctx.restore();
            } else {
                console.error('not fond')
            }
        },
        renderPolygon() {
            if (this.ctx) {
                this.ctx.save();
                this.ctx.strokeStyle = 'black';
                this.ctx.fillStyle = 'pink';
                this.ctx.lineWidth = 3;
                this.ctx.rotate(Math.PI * 0.25);
                this.ctx.beginPath();
                this.ctx.moveTo(440, 10);
                this.ctx.lineTo(490, 50);
                this.ctx.lineTo(465, 100);
                this.ctx.lineTo(415, 100);
                this.ctx.lineTo(390, 50);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.stroke();
                this.ctx.restore();
            } else {
                console.error('not fond')
            }
        },
        renderCurve() {
            if (this.ctx) {
                this.ctx.save();
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(10, 200);
                this.ctx.quadraticCurveTo(60, 110, 150, 200)
                this.ctx.stroke();
                this.ctx.restore();
            } else {
                console.error('not fond')
            }
        },
        renderBezierCurve() {
            if (this.ctx) {
                this.ctx.save();
                this.ctx.strokeStyle = 'black';
                this.ctx.lineWidth = 5;
                this.ctx.beginPath();
                this.ctx.moveTo(250, 200);
                this.ctx.bezierCurveTo(330, 110, 400, 280, 500, 200)
                this.ctx.stroke();
                this.ctx.restore();
            } else {
                console.error('not fond')
            }
        },
        renderText() {
            if (this.ctx) {
                this.ctx.font = 'bold 16px simhei';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('hello world', 200, 250)
            } else {
                console.error('not fond')
            }
        }
    }
}
</script>

<style lang="scss">
    .d3-canvas-base__tab{
        padding: 0;
        li{
            display: inline-block;
            width: 100px;
            text-align: center;
            a {
                color:#666;
                font-size: 13px;
            }
        }
    }
    .d3-canvas-base__content{
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
    }
</style>
