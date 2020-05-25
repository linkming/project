<template>
  <div class="demo">

  </div>
</template>

<script>
import * as d3 from 'd3'
import data from './json'
export default {
  name: 'demo',
  data () {
    return {

    }
  },
  mounted () {
    this.$api.getGraph().then((res) => {
      if (res.code === 0) {
        console.log(res)
      } else {
        this.$notify.error({
          title: '错误',
          message: res.msg || '获取失败'
        })
      }
    }).catch(err => { console.log(err) })
    var width = 1000
    var height = 500
    function chart () {
      // const links = data.links.map(d => Object.create(d))
      // const nodes = data.nodes.map(d => Object.create(d))
      const links = data.links
      const nodes = data.nodes

      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2))

      // const svg = d3.create('svg')
      //   .attr('viewBox', [0, 0, width, height])
      const svg = d3.select('.demo').append('svg')
        .attr('viewBox', [0, 0, width, height])
      const link = svg.append('g')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke-width', d => Math.sqrt(d.value))
      const node = svg.append('g')
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 15)
        .attr('fill', color())
        .call(drag(simulation))
        .on('click', (d, l) => {
          console.log(d, l)
          console.log('d, l')
        })

      node.append('title')
        .text(d => d.id)

      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
      })

      // invalidation.then(() => simulation.stop())
      // console.log(svg.node)
      // debugger
      return svg.node()
    }
    function color () {
      const scale = d3.scaleOrdinal(d3.schemeCategory10)
      return d => scale(d.group)
    }
    var drag = simulation => {
      function dragstarted (d) {
        console.log(d)
        if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      }

      function dragged (d) {
        d.fx = d3.event.x
        d.fy = d3.event.y
      }

      function dragended (d) {
        if (!d3.event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
    }
    chart()
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .demo{
    /deep/ svg{
      width:1001px;
      height: 660px
    }
  }
</style>
