<template>
  <div class="container" id="container">
    <div class="icon">
      <img :src="imgData" alt class="icon" />
    </div>
    <ul class="nav">
      <li class="box">menu1</li>
      <li class="box">menu2</li>
      <li class="box">menu3</li>
      <li class="box">menu4</li>
      <li class="box">menu5</li>
    </ul>
  </div>
</template>

<script>
import logo from "~/assets/img/monazu.png";
export default {
  data(){
    return{
      imgData:logo,
      menuData:[{
        title:"menu1",
        url:"/"
      },
      {
        title:"menu2",
        url:"/"
      },
      {
        title:"menu3",
        url:"/"
      },
      {
        title:"menu4",
        url:"/"
      },
      {
        title:"menu5",
        url:"/"
      }
      ],

    }
  },
  mounted(){
 let style =   window.getComputedStyle(id,"");
 console.log(style);
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  max-width: 800px;
  padding: 0;
  margin: auto;
  padding: 15px 0;
  border-bottom: 1px solid rgba(20, 20, 20, 1);
}
.icon {
  margin: 0;
  width: 30%;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
}
.nav {
  position: relative;
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
}

.box {
  cursor: pointer;
  // border-right: 1px solid black;
  // border-left: 1px solid black;
  font-size: 18px;
  color: rgba(50, 50, 50, 1);
  font-weight: 800;
  margin: 0 2px;
  padding: 15px 10px;
}
</style>
