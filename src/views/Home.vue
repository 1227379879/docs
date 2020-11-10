<template>
  <div class="home">
    aaaa
  </div>
</template>

<script>
import {aa} from  "../request/api"
export default {
  name: 'Home',
  mounted() {
    aa().then(res=>{
      console.log(res)
    })
  },
  components: {
  }
}
</script>
