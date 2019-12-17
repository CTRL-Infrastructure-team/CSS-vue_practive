<template>
  <div class="container">
    <div class="icon"></div>
    <ul class="nav">
      <li v-for="(item,index) in menuData" :key="index">
        <nuxt-link :to="item.url">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from "~/assets/img/monazu.png";
export default {
  props:{
    menuData:Array
  },
  data(){
    return{
      imgData:logo,

    }
  },
}
</script>

<style lang="scss" scoped>
</style>
