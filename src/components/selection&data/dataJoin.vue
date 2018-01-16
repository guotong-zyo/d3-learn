<template>
<div class="d3-chapter-base__inner">
    <div class="inner_datum">
        <p>Fire</p>
        <p>Water</p>
        <p>Wind</p>
    </div>
    <div class="inner_data">
        <p></p>
        <p></p>
        <p></p>
    </div>
    
</div>
  
</template>
<script>
import * as d3 from "d3";
export default {
    data() {
        return {
            ctx: null,
            width: 0,
            height: 0
        }
    },
    mounted(){
        // this.datumInit();
        this.dataInit();
    },
    methods: {
        datumInit() {
            const p = d3.select('.inner_datum').selectAll('p');

            p.datum('Thunder').append('span').text((d, i) => ` ${d}`);

            console.log(p);
        },
        dataInit() {
            const p = d3.select('.inner_data').selectAll('p');
           

            // const person = [{id: 6, name: '李四'}, {id: 3, name: '张三'}, {id: 6, name: '王五'}];

            // p.data(person).text((d, i) => `${d.id} : ${d.name}`);

            // setTimeout(() => {
            //     p.data(person, (d) => {console.log(d.id); return d.id } ).text((d, i) => `${d.id} : ${d.name}`);
            // }, 2000);

            // enter集通常用来创建缺失的元素，
            // const dataset = [3, 6, 9, 12, 15];
            // const update = p.data(dataset);
            // const enter = update.enter();
            // update.text((d) => d);
            // enter.append('p').text((d) => d);
            
            // 现有的元素没有被数据绑定时将没有数据的这些元素返回
            // const dataset = [3];
            // const update = p.data(dataset);
            // const exit = update.exit();
            // update.text((d) => d);
            // exit.remove();

            // 无论网页中元素的数量是不足的还是多余的，最终结果都是每个元素对应数据数组中的一项
            const dataset = [3, 6, 9, 12];
            const update = p.data(dataset); 
            const enter = update.enter();
            const exit = update.exit();

            update.text((d) => d);
            enter.append('p').text((d) => d);
            exit.remove();

        }

    }

}
</script>

<style lang="scss">     
  
</style>
 