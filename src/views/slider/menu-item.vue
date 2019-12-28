<template>
  <div class="menu-item">
    <el-submenu v-if="isHaveChild(item)" :index="item.path">
      <template slot="title">
        <i class="el-icon-location"/>
        <span slot="title">{{ item.title }}</span>
      </template>
      <el-menu-item v-for="value in item.children" :key="value.path" @click="linkURL(item.path+'/'+value.path)">
        <i class="el-icon-document"/>
        <span slot="title">{{ value.title }}</span>
        <!-- <Menu-itme v-if="isHaveChild(value)" :item="value" /> -->
      </el-menu-item>
    </el-submenu>
    <el-menu-item v-else :index="item.path" @click="linkURL(item.path)">
      <i class="el-icon-document"/>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  computed: {
    // isHaveChild(child) {
    //   return child.children instanceof Array
    // }
  },
  mounted() {

  },
  methods: {
    isHaveChild(child) {
      return child.children instanceof Array
    },
    linkURL(address) {
      const url = address instanceof Array ? address[0] : address
      console.log(url)
      this.$router.push({ path: url })
    }
  }
}
</script>

<style lang="" scoped>
  /* .menu-item{

  } */
</style>
