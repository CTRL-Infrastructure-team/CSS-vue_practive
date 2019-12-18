<template>
  <div>
    <img :src="mainimg" alt />
  </div>
</template>
<script>
import mainimg from "~/assets/img/img1.jpg"
export default {
  data(){
    return{
      mainimg:mainimg
    }
  }
}
</script>
<style scoped>
</style>
