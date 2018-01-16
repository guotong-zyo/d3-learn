<template>
<div class="d3-chapter-base__inner">
    <p>原数组 {{numbers}}</p>
</div>
  
</template>
<script>
import * as d3 from "d3";
export default {
    data() {
        return {
            numbers: [54, 23, 77, 11, 34]
        }
    },
    mounted(){
        this.init();
    },
    methods: {
       init() {
            // 升序快捷方法
            this.numbers.sort(d3.ascending);
            console.log(this.numbers);
            // 降序快捷方法
            this.numbers.sort(d3.descending);
            console.log(this.numbers);
            
            // 求值
            console.log(`最小值：${d3.min(this.numbers)}`);
            console.log(`模2 后的最小值：${d3.min(this.numbers, (d) => d%2)}`);
            console.log(`最大值：${d3.max(this.numbers)}`);
            console.log(`最小值和最大值分别是：${d3.extent(this.numbers)}`);
            console.log(`求和：${d3.sum(this.numbers)}` );
            console.log(`平均数：${d3.mean(this.numbers)}` );
            console.log(`中位数：${d3.median(this.numbers)}` );

            // 生成和操作
            console.log(d3.range(10))
            console.log(d3.range(2, 10))
            console.log(d3.range(2, 10, 2))

            // 随机排列数组
            console.log(d3.shuffle(this.numbers))
            console.log(d3.shuffle(this.numbers))
       },
    }

}
</script>