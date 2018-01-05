<template>
<div class="d3-chapter-base__wrapper">
    <div class="myDom" id="firstDom" data-id="123" style="height:200px">this is a garagraph <span>aaaa</span></div>
    <div class="myDom" id="secondDom"></div>
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
        this.init()
        this.operate()
    },
    methods: {
        init() {
            const selection = d3.selectAll('.myDom');
            if (!selection.empty()) {
                selection.attr('data-id','345');
                console.log(selection.classed());
                console.log(selection.style('height'));
                console.log(selection.property('id'));
                console.log(selection.text());
                console.log(selection.html());
            }
        },
        operate() {
            const selection = d3.selectAll('#secondDom');
            if (!selection.empty()) {
                selection.append('p').text('append');
                selection.insert('p').text('insert').attr('id', 'insert');
                const insert = d3.select('#insert')
                insert.remove();
            }
        }
    }

}
</script>

<style lang="scss">     
  
</style>
