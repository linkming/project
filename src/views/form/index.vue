<template>
  <div ref="d3" class="d3">
    <!-- <svg style="width:500;height:500">

    </svg> -->
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: '',
  data() {
    return {
      arr: []
    }
  },
  mounted() {
    // d3.select('svg').selectAll('path').data(this.arr).attr('stroke', '2')
    // const that = this
    // window.onresize = function(params) {
    //   console.log(that.$refs.d3.offsetHeight)
    // }
    var str = '云中谁寄锦书来，雁字回时，月满西楼'
    var width = 300
    var height = 300

    var svg = d3.select('.d3')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
    svg.append('text')
      .attr('x', 30)
      .attr('y', 100)
      .attr('font-size', 30)
      .attr('font-family', 'simsun')
      .text(str)
  },
  methods: {
    fn(event) {
      console.log(event.target)
    }
  }
}
</script>

<style lang="" scoped>
  .d3{
    height: 100%;
  }
</style>
