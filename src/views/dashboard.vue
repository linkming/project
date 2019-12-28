<template>
  <div>
    <el-input v-model="id" placeholder="请输入歌曲ID" @change="getSongs"/>
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
        <el-row>
          <el-col :span="1">
            <img :src="item.user.avatarUrl" class="comments-portrait">
          </el-col>
          <el-col :span="23">
            <el-row>
              <el-col :span="4">
                <span class="username">{{ item.user.nickname }}:</span>
              </el-col>
              <el-col :span="20">
                <pre>{{ item.content }}</pre>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </li>
    </ul>
    <div class="block" style="transition-timing-function: cubic-bezier(0, 0, 0.58, 1);" />
  </div>
</template>
<script>
import json from '@/data/json.json'
import IndexedDB from '@/utils/indexedDB'
// import jsonEditor from '@/components/JsonEditor'
export default {
  beforeRouteEnter(to, from, next) {
    next()
  },
  data() {
    return {
      id: '',
      request: null,
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
    this.request = new IndexedDB('db-name')
    // this.storge()
  },
  methods: {
    getSongs() {
      this.music(this.id)
    },
    music(id) {
      this.$api.getRun(id).then(res => {
        if (res.code === 200) {
          this.songList = res.songs
          this.privileges = res.privileges
          // 歌曲评论
          this.$api.comments(id).then((res) => {
            if (res.code === 200) {
              // console.log('res', res)
              this.commentsList = res.comments
              this.commentsTotal = res.total
              this.storge(res.comments)
            } else {
              this.$notify.error('错误')
            }
          }).catch(err => { console.log(err) })
        }
      })
    },
    storge(commentsList) {
      console.log(commentsList)
      var request = window.indexedDB.open('linkming', 1.1)
      request.onupgradeneeded = function(event) {
        var db = event.target.result
        console.log(event)
        var objectStore = db.createObjectStore(
          'songsStores',
          { autoIncrement: true }
        )
        for (let i = 0; i < commentsList.length; i++) {
          console.log(commentsList[i])
        }
        objectStore.createIndex('name', 'name', { unique: false })
        // console.log
        objectStore.add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })
        objectStore.createIndex('email', 'email', { unique: true })
        console.log(objectStore.get(1))
      }
      console.log(request)

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
    }
  }
}
</script>
<style lang="scss">
.comments-portrait{
  width:64px;
}
.username{
  color: deepskyblue;
  font-size: 12px;
}
ul{
  margin: 24px;
  li{
    list-style-type: none;
  }
}
</style>

