<template>
  <div>
    <el-input v-model="id" @change="getSongs"/>
    <el-table :data="songList" style="width: 100%">
      <el-table-column
        prop="name"
        label="歌曲名称"
        width="180"/>
      <el-table-column
        prop="publishTime"
        label="发行时间"
        width="180">
        <template slot-scope="scope">
          {{ new Date(scope.row.publishTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="al" label="专辑封面">
        <template slot-scope="scope">
          <img :src="scope.row.al.picUrl" alt="" style="width:200px">
        </template>
      </el-table-column>
      <el-table-column prop="al" label="所属专辑">
        <template slot-scope="scope">
          {{ scope.row.al.name }}
        </template>
      </el-table-column>
      <el-table-column prop="ar" label="歌手">
        <template slot-scope="scope">
          {{ scope.row.ar[0].name }}
        </template>
      </el-table-column>
      <el-table-column prop="ar" label="播放">
        <template slot-scope="scope">
          <a :href="'http://music.163.com/song/media/outer/url?id='+scope.row.id +'.mp3'" target="_blank">播放</a>
        </template>
      </el-table-column>
    </el-table>
    <ul>
      <li v-if="commentsTotal===1">暂无评论</li>
      <li v-for="(item,index) in commentsList" v-else :key="index">
        <img :src="item.user.avatarUrl" class="comments-portrait">
        <span class="username">{{ item.user.nickname }}</span>:{{ item.content }}
        <el-badge :value="item.likedCount" class="item">
          <el-button size="small">赞</el-button>
        </el-badge>
      </li>
    </ul>
  </div>
</template>
<script>
import json from '@/data/json.json'
// import jsonEditor from '@/components/JsonEditor'
export default {
  beforeRouteEnter(to, from, next) {
    next()
  },
  // components: { jsonEditor },
  data() {
    return {
      id: '',
      str: '',
      songList: [],
      privileges: [],
      commentsTotal: 0,
      commentsList: [],
      json: json
    }
  },
  computed: {

  },
  mounted() {
    this.storge()
    this.str = this.hexCharCodeToStr('\uD83D\uDCA9')
    this.str = escape(0xD83D)
  },
  methods: {
    getSongs() {
      console.log(arguments)
      this.music(this.id)
    },
    music(id) {
      this.$api.getRun(id).then(res => {
        if (res.code === 200) {
          this.songList = res.songs
          this.privileges = res.privileges
          this.$api.comments(id).then((res) => {
            if (res.code === 200) {
              console.log(res)
              this.commentsList = res.comments
              this.commentsTotal = res.total
            } else {
              this.$notify.error('错误')
            }
          }).catch(err => { console.log(err) })
        }
      })
      // var xhr = new XMLHttpRequest()
      // xhr.open('get', 'https://api.imjad.cn/cloudmusic/?type=detail&id=32785674', true)
      // // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
      // xhr.send()
      // xhr.onreadystatechange = (res) => {
      //   if (xhr.readyState === 4) {
      //     if (xhr.status === 200) {
      //       var data = xhr.responseText
      //       console.log(data)
      //       return data
      //     }
      //   }
      // }
    },
    storge() {
      var request = window.indexedDB.open('linkming', 1.1)
      request.onupgradeneeded = function(event) {
        var db = event.target.result
        var objectStore = db.createObjectStore(
          'person',
          { autoIncrement: true }
        )
        objectStore.createIndex('name', 'name', { unique: false })
        objectStore.add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })
        objectStore.createIndex('email', 'email', { unique: true })
        console.log(objectStore.get(1))
      }
      // function add() {
      //   console.log(arguments)
      //   request.transaction(['person'], 'readwrite')
      //     .objectStore('person')
      //     .add()
      //   request.onsuccess = function(event) {
      //     console.log('数据写入成功')
      //   }

      //   request.onerror = function(event) {
      //     console.log('数据写入失败')
      //   }
      // }

      // add()

      request.onsuccess = function(event) {
        console.log('数据写入成功')
      }

      //   request.onerror = function(event) {
      //     console.log('数据写入失败')
      //   }
      //   if (!db.objectStoreNames.contains('person')) {
      //     console.log(this)
      //     // var objectStore = db.createObjectStore('person', { keyPath: 'id' })
      //   }
      // }
      // add()
      // console.log(request.onupgradeneeded)
    },
    // add() {},
    hexCharCodeToStr(hexCharCodeStr) {
      var trimedStr = hexCharCodeStr.trim()
      var rawStr = trimedStr.substr(0, 2).toLowerCase() === '0x' ? trimedStr.substr(2) : trimedStr
      var len = rawStr.length
      if (len % 2 !== 0) {
        alert('Illegal Format ASCII Code!')
        return ''
      }
      var curCharCode
      var resultStr = []
      for (var i = 0; i < len; i = i + 2) {
        curCharCode = parseInt(rawStr.substr(i, 2), 16) // ASCII Code Value
        resultStr.push(String.fromCharCode(curCharCode))
      }
      return resultStr.join('')
    }
  }

}
</script>
<style >
.comments-portrait{
  width:44px;
}
.username{
  color: deepskyblue;
}
</style>

