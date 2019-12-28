<template>
  <div class="d3">
    <div class="svg"/>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: 'D3',
  data() {
    return {
      svg: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var dataArr = [20, 40, 80]
      var dataHeight = 25
      d3.select('.svg')
        .append('svg')
        .attr('height', 300)
        // .attr('width', 300)
        .selectAll('rect')
        .data(dataArr)
        .enter()
        .append('rect')
        .attr('width', function(d, i) {
          return d
        })
        .attr('height', dataHeight - 2)
        .attr('x', 0)
        .attr('y', function(d, i) {
          return i * dataHeight
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .d3{
    padding: 12px
  }
</style>
