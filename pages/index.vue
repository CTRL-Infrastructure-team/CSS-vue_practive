<template>
  <headerComponent :menuData="menuData" />
</template>

<script>
import AllComponents from '~/plugins/loadComponent';

export default {
  data(){
    return{
     menuData:[{
        title:"フレックス",
        url:"/explain"
      },
      {
        title:"テキスト",
        url:"/textShadow"
      },
      {
        title:"ボックス影",
        url:"/boxshadow"
      },
      {
        title:"中身ない",
        url:"/"
      },
      {
        title:"menu5",
        url:"/"
      }],

    }
  }
}
</script>
<style scoped>
</style>
