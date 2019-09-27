<template>
  <div>
    <codemirror ref="myCm" v-model="json.type" :options="cmOptions" class="code" @changes="changes" />
    <!-- <codemirror ref="myCode" :value="modes" v-model="msg" :option="modes" /> -->
  </div>
</template>
<script src="@/utils/tiff.min.js"></script>
<script>
// import '@/utils/tiff.min.js'
import json from '@/data/json.json'
import { codemirror } from 'vue-codemirror'

require('codemirror/mode/python/python.js')
require('codemirror/addon/fold/foldcode.js')
require('codemirror/addon/fold/foldgutter.js')
require('codemirror/addon/fold/brace-fold.js')
require('codemirror/addon/fold/xml-fold.js')
require('codemirror/addon/fold/indent-fold.js')
require('codemirror/addon/fold/markdown-fold.js')
require('codemirror/addon/fold/comment-fold.js')
export default {
  components: {
    codemirror
  },
  data() {
    return {
      json: {},
      item: {
        content: '轴写的',
        link: 'aa'
      },
      cmOptions: {
        value: 'html',
        label: 'XML/HTML'
      },
      modes: [{
        value: 'css',
        label: 'CSS'
      }, {
        value: 'javascript',
        label: 'Javascript'
      }, {
        value: 'html',
        label: 'XML/HTML'
      }, {
        value: 'x-java',
        label: 'Java'
      }, {
        value: 'x-objectivec',
        label: 'Objective-C'
      }, {
        value: 'x-python',
        label: 'Python'
      }, {
        value: 'x-rsrc',
        label: 'R'
      }, {
        value: 'x-sh',
        label: 'Shell'
      }, {
        value: 'x-sql',
        label: 'SQL'
      }, {
        value: 'x-swift',
        label: 'Swift'
      }, {
        value: 'x-vue',
        label: 'Vue'
      }, {
        value: 'markdown',
        label: 'Markdown'
      }]
    }
  },
  created() {
    this.json = json
  },
  methods: {
    changes() {

    }
  }
//   filters: {
//     toString (str) {
//       return str.substr(4, str.length)
//     }
//   }

}
</script>
