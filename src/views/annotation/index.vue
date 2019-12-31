<template>
  <div class="annotation">
    <div v-for="(item,index) in jsonList" :key="index">
      <dependency :json="item" :class-name="'-'+index" />
    </div>
  </div>
</template>

<script>
import { colorBoard, recurMatchColor } from '@/utils/color-maker'
import dependency from './components/dependency'
export default {
  name: 'Annotation',
  components: { dependency },
  data() {
    return {
      json: require('@/utils/json2.json'),
      annotator: null,
      jsonList: []
    }
  },
  mounted() {
    const arr = Object.values(JSON.parse(this.json.object.labels))
    this.jsonList = arr.map(item => {
      return {
        content: item.context,
        labelCategories: this.addColor(item.label.labelCategories),
        labels: this.filterCategoryId(item.label.labels, item.context),
        connectionCategories: item.label.connectionCategories,
        connections: this.filterConnections(item.label.connections, item.label.labels)
      }
    })
  },
  methods: {
    filterCategoryId(labels, context) {
      return labels.filter(item => item.categoryId)
    },
    filterConnections(connections, labels) {
      const idList = labels.filter(item => item.categoryId).map(item => item.id)
      return connections.filter(item => {
        return idList.indexOf(item.fromId) >= 0 && idList.indexOf(item.toId) >= 0
      }).filter(item => item.categoryId)
    },
    addColor(labelCategories) {
      return labelCategories.map((item, index) => {
        return {
          id: item.id,
          enText: item.enText,
          text: item.text,
          color: this.matchColor(index),
          borderColor: recurMatchColor(-0.32, this.matchColor(index), 1) // 比 color 深一点
        }
      })
    },
    matchColor(index) {
      return index < 10 ? colorBoard[index] : recurMatchColor(-0.12, colorBoard[index % 10], Math.floor(index / 10))
    }
  }
}
</script>

<style lang="scss">
  .annotation{
    padding: 12px;
    svg{
      width:100%;
      border:1px solid #ccc;
    }
  }
</style>
