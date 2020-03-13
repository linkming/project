<template>
  <div class="form">
    <slot></slot>
    <!-- <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
        <slot></slot>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    modes: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  mounted () {
    // https:// c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=35231711271332761&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%88%B1&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0
    axios({
      methods: 'get',
      url: 'api/base/fcgi-bin/fcg_global_comment_h5.fcg',
      params: {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        cid: 205360772,
        reqtype: 1,
        cmd: 8,
        needmusiccrit: 0,
        pagesize: 3,
        lasthotcommentid: 0,
        qq: 0,
        pagenum: 0,
        biztype: 1,
        topid: 105468975,
        ct: 999,
        _: new Date().valueOf(),
        msg_comment_id: 0
      }
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    handleClose () {

    }
  }
}
</script>

<style lang="" scoped>
  .form{
    padding: 12px;
  }
</style>
