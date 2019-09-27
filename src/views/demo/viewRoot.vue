<template>
  <div class="root">
    <div class="warp">
      <div class="container">
        <jiang-you/>
      </div>
    </div>
  </div>
</template>

<script>
import jiangYou from './jiangyou'
export default {
  name: 'Root',
  components: { jiangYou },
  data() {
    return {
      list: [1, 2, 3, 4]
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="" scoped>
  .root{
      padding: 12px;
  }
</style>
