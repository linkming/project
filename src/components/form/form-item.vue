<template>
  <div class="formItem">
      <label for=""></label>
   <div :style="{width}" class="label-item">{{label}}</div>
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'formItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '80px'
    },
    prop: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .formItem{
      font-size: 14px;
      line-height:36px;
      height:36px;
      display: flex;
      .label-item{
        text-align: right;
        padding-right: 12px;
      }
      &:before{
          content:'*';
          color:#f00;
      }
      /* background-color:#0f0; */
  }
</style>
