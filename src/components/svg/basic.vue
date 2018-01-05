<template>
<div class="d3-svg-base__wrapper">
    <p>SVG基础</p>
    <div class="d3-svg-base__content">
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <rect x="0" y="0" width="200" height="90" style="fill:steelblue; stroke:blue; stroke-width:2; opacity: 0.5 "></rect>
                <rect x="0" y="100" rx="10" ry="10" width="200" height="90" style="fill:steelblue; stroke:blue; stroke-width:2; opacity: 0.5 "></rect>
                <text x="10" y="40" dx="-5" dy="5" rotate="0" textLength="50" style="font-size:12" >矩形</text>
                <text x="10" y="120" dx="-5" dy="5" rotate="0" textLength="50" style="font-size:12" >圆角矩形</text>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <circle cx="100" cy="50" r="45" style="fill:steelblue; stroke:blue; stroke-width:2; opacity: 0.5 "></circle>
                <ellipse cx="100" cy="150"  rx="80" ry="45" style="fill:steelblue; stroke:blue; stroke-width:2; opacity: 0.5 "></ellipse>
                <text x="10" y="180" dx="-5" dy="5" rotate="0" textLength="80" style="font-size:12" >圆形、椭圆形</text>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <line x1="20" y1="20" x2="180" y2="180" style="stroke:black; stroke-width:2; stroke-linecap: round" ></line>
                <line x1="180" y1="20" x2="20" y2="180" style="stroke:black; stroke-width:1;"></line>
                <text x="10" y="180" dx="-5" dy="5" rotate="0" textLength="30" style="font-size:12" >线段</text>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <polygon points="100, 20 20, 90 60, 160 140, 160 180 ,90 " style="fill:white; stroke:blue; stroke-width:1;"  ></polygon>
                <text x="10" y="180" dx="-5" dy="5" rotate="0" textLength="50" style="font-size:12" >多边形</text>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <path d="M20,20 L150,190 M20,20 H150 M20,20 V190" style="stroke:black; stroke-width:1;" ></path>
                <text x="30" y="180" dx="-5" dy="5" rotate="0" textLength="30" style="font-size:12" >路径</text>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <path d="M20,20 C60,20 100,20 120,100 S150,180 190,100 " style=" fill:white; stroke:black; stroke-width:1;" ></path>
                <text x="30" y="180" dx="-5" dy="5" rotate="0" textLength="30" style="font-size:12" >曲线</text>
            </svg>
       </div>
       
    </div>
    <div class="d3-svg-base__content">
        <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <text x="10" y="100" dx="-5" dy="5" rotate="0" textLength="90" style="font-size:12" >这是一段文字</text>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <defs>
                    <marker id="arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" viewBox="0 0 12 12" refX="6" refY="6" orient="auto">
                        <path d="M2,2 L10,6 L2,13 L6,6 L2,2" style="fill: #000000;"></path>
                    </marker>
                </defs>
                <text x="10" y="120" dx="-5" dy="5" rotate="0" textLength="150" style="font-size:12" >直线添加箭头标记</text>
                <line x1="180" y1="20" x2="20" y2="180" style=" fill: white; stroke:black; stroke-width:1;" marker-start="url(#arrow)" marker-mid="url(#arrow)" marker-end="url(#arrow)"></line>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <defs>
                    <filter id="GaussianBlur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                    </filter>
                </defs>
                <text x="10" y="120" dx="-5" dy="5" rotate="0" textLength="150" style="font-size:12" >矩形添加高斯模糊滤镜</text>
                <rect x="0" y="0" width="200" height="90" style="fill:steelblue; stroke:blue; stroke-width:2; opacity: 0.5 " filter="url(#GaussianBlur)" ></rect>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <defs>
                    <linearGradient id="myGradient" x1="0%" t1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#F00" />
                        <stop offset="100%" stop-color="#0FF" />
                    </linearGradient>
                </defs>
                <text x="10" y="120" dx="-5" dy="5" rotate="0" textLength="180" style="font-size:12" >矩形添加背景水平渐变</text>
                <rect x="0" y="0" width="200" height="90" style="stroke:blue; stroke-width:2; opacity: 0.5 " fill="url(#myGradient)" ></rect>
            </svg>
       </div>
       <div class="d3-svg-base__item">
            <svg width="200" height="200" version="1.1">
                <defs>
                    <linearGradient id="myGradient2" x1="0%" t1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#F00" />
                        <stop offset="30%" stop-color="#F0E" />
                        <stop offset="60%" stop-color="#FF0" />
                        <stop offset="100%" stop-color="#0FF" />
                    </linearGradient>
                </defs>
                <text x="10" y="120" dx="-5" dy="5" rotate="0" textLength="180" style="font-size:12" >背景垂直多段渐变，高斯模糊</text>
                <rect x="0" y="0" width="200" height="90" style="stroke:blue; stroke-width:2; opacity: 0.5 " fill="url(#myGradient2)" filter="url(#GaussianBlur)" ></rect>
            </svg>
       </div>
    </div>
</div>
  
</template>
<style lang="scss">
    .d3-svg-base__content{
        margin-top: 100px;
        display: flex;
        justify-content: space-around;
        .d3-svg-base__item{
            height: 200px;
            width: 200px;
        }
    }
</style>
