<template>
  <div :class="'wrap dependency'+className" style="width:100%;padding-left:24px"/>
</template>

<script>
import { Annotator } from 'poplar-annotation'

export default {
  name: 'Dependency',
  props: {
    json: {
      type: Object,
      default: () => {}
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      annotator: null,
      options: {
        unconnectedLineStyle: 'straight',
        allowMultipleLabel: 'notAllowed',
        labelWidthCalcMethod: 'label',
        selectingAreaStrip: /[\s]/
        // labelOpacity: 90
      }
    }
  },
  mounted() {
    // console.log(JSON.stringify(this.json))
    this.annotator = new Annotator(this.json,
      document.getElementsByClassName('dependency' + this.className)[0],
      this.options)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    padding: 12px
  }
</style>
