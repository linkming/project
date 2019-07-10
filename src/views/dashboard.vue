<template>
  <div>
    <json-editor :value="json"/>
  </div>
</template>
<script>
import json from '@/data/json.json'
import jsonEditor from '@/components/JsonEditor'
export default {
  components: { jsonEditor },
  data() {
    return {
      json: json
    }
  }
}
</script>
