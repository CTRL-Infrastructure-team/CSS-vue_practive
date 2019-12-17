<template>
  <div>
    <h1>.container {</h1>
    <div class="choiceFlex">
      <div class="choiceBox">display:flex</div>
      <div class="choiceBox">
        <span>flex-wrap:</span>
        <select v-model="flexWrap">
          <option v-for="(value,index) in wrapOption" :key="index">{{value}}</option>
        </select>←改行の有無
        <span>flex-direction:</span>
        <select v-model="flexDirection">
          <option v-for="(value,index) in directionOption" :key="index">{{value}}</option>
        </select>←横並びか縦か
      </div>
      <div class="choiceBox">
        <span>justify-content:</span>
        <select v-model="flexJustify">
          <option v-for="(value,index) in JustifyOption" :key="index">{{value}}</option>
        </select>←左右の並び
        <span>align-items:</span>
        <select v-model="flexAlign">
          <option v-for="(value,index) in alignOption" :key="index">{{value}}</option>
        </select>←上下の揃え
      </div>
      <div class="choiceBox"></div>
      <h1>}</h1>
      <div>
        ボックスの数
        <input type="number" v-model.number="boxNumber" max="30" />
      </div>
    </div>
    <textarea type="textarea" class="textArea" 　v-model="theTextArea" @input="upDateStyle(true)" />
    <textarea type="textarea" class="textArea" 　v-model="textArea" @input="upDateStyle(false)" />
    <div class="container" :style="flexStyle">
      <div class="box main" :style="theBoxStyle"></div>
      <div class="box" v-for="(box,index) in boxs" :key="index" :style="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flexWrap: "nowrap",
      wrapOption:["wrap","wrap-reverse","nowrap"],
      flexJustify:"flex-start",
      JustifyOption:["flex-start","flex-end","center","space-between","space-around"],
      boxNumber:8,
      flexDirection: "row",
      directionOption:['row','row-reverse','column','column-reverse'],
      flexAlign:'stretch',
      alignOption:['stretch','flex-start','flex-end','center','baseline'],
      textArea:"width: 100px;\nmin-height: 100px;",
      boxStyle:"width: 100px;\nmin-height: 100px;",
      theTextArea:"width: 100px;\nmin-height: 100px;",
      theBoxStyle:"{width: 100px;\nmin-height: 100px;"
    }
  },
  computed:{
    flexStyle(){
      let height ="auto";
      if(this.flexAlign === 'stretch'){

      }
      let myStyle = {
        flexWrap: this.flexWrap,
        justifyContent: this.flexJustify,
        alignItems:this.flexAlign,
        flexDirection:this.flexDirection
      }
      return myStyle
    },
    boxs(){
      let myStyle = new Array();
      for(let i = 0; i < this.limitBoxNumber; ++i){
     myStyle[i] = {background: `hsl(${i * 30},${(i * 10) % 50 + 40}%,${(i * 10) % 50 + 40}%)`}
     myStyle[i] = Object.assign(myStyle[i],this.boxStyle);

      }
      return myStyle;
    },
    limitBoxNumber(){
      if(this.boxNumber >100){
        this.boxNumber = 10;
        return 10;
      }
      if(this.boxNumber < 0){
        this.boxNumber = 10;
        return 10;
      }
      return this.boxNumber -1
    },
  },
  methods:{
    upDateStyle(bool){
      let styleArray;
      if(bool){
         styleArray = this.theTextArea.split(/\n/);
        }else{
         styleArray = this.textArea.split(/\n/);
      }
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
      if(bool){
        this.theBoxStyle = styleObj;
      }else {
        this.boxStyle = styleObj;
      }
      console.log(this.boxStyle,this.theBoxStyle,bool);
    }
  },
  created(){
    this.upDateStyle();
  }
}
</script>

<style lang="scss" scoped>
$aaaa: pink;
.container {
  display: flex;
  width: 400px;
  height: 400px;
  background: $aaaa;
  overflow: hidden;
}
.box {
  box-sizing: border-box;
  border: solid 1px black;
}
.main {
  background: black;
}
.choiceFlex {
  display: flex;
  flex-direction: column;
}
.choiceBox {
  font-size: 16px;
  span {
    margin-left: 10px;
  }
  select {
    transform: translateY(-5%);
    padding: 2px;
    font-size: 12px;
  }
}
h1 {
  font-size: 25px;
  margin: 0;
  padding: 0;
  line-height: 25px;
}
.textArea {
  width: 300px;
  height: 100px;
}
</style>
