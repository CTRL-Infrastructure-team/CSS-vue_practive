<template>
  <div>
    <h1 :style="textStyle" class="box">CSS完全に理解した</h1>
    <textarea name id cols="50" rows="15" v-model="text" @input="styleUpdate"></textarea>
  </div>
</template>
<script>
export default {
  data(){
    return {
      text:'font-size:30px\nfont-weight:500',
      textStyle:'',
    }
  },
  methods:{
    styleUpdate(){
      let styleArray;
         styleArray = this.text.split(/\n/);
      let styleObj = new Object();
      console.log(styleObj);
      for(const styleItem of styleArray){
        if(!styleItem.includes(":")) return;
        let keyValue = styleItem.split(":");
        if(keyValue[1].includes(";")){
          keyValue[1] = keyValue[1].split(";").shift();
        }
        styleObj[keyValue[0]] = keyValue[1]
      }
      this.textStyle =styleObj;
    }
  },
  created(){
    this.styleUpdate()
  }

}
</script>
<style scoped>
.box {
  height: 100px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
