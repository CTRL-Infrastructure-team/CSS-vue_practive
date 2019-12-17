<template>
  <section :class="{black:isBlack}" class="sectionHeight">
    <h1>boxShadow</h1>
    <button @click="isBlack = !isBlack">明るさ変更</button>
    <button @click="animateSpred">spred!!</button>
    <button @click="animateDisSpred">disspred!!</button>
    <div　class="flex">
      <span>X</span>
      <span>Y</span>
      <span>ぼかし</span>
      <span>広がり</span>
    </div>
    <div class="flex">
      <input type="number" v-model.number="X" />
      <input type="number" v-model.number="Y" />
      <input type="number" v-model.number="blur" />
      <input type="number" v-model.number="spred" />
    </div>
    <div class="flex">
      <span>Ｈ</span>
      <span>Ｓ</span>
      <span>Ｌ</span>
      <span>ALPHA</span>
    </div>
    <div class="flex">
      <input type="number" v-model.number="H">
      <input type="number" v-model.number="S">
      <input type="number" v-model.number="L">
      <input type="number" v-model.number="alpha">
    </div>
    <div class="box" :style="shadowStyle" ></div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      X:3,
      Y:3,
      spred:5,
      blur:4,
      H:0,
      S:0,
      L:0,
      alpha:100,
      isBlack:false
    }
  },
  methods:{
    getX(event){
      console.log(event);
    },
    animateSpred(){
      let i = 1
    const intervalId =  setInterval(() => {
     i =   i + i;
        this.spred = 1 + i;
        if(this.spred > 400){
          clearInterval(intervalId);
        }
      }, 100);
    },
    animateDisSpred(){
      let i = 1;
       const intervalId =  setInterval(() => {
         i = i + i;
         this.spred = 400- i;
      if(this.spred < 1){
        clearInterval(intervalId)
      }
     }, 100);
    }
  },
  computed:{
    shadowStyle(){
      let style = new Object();
      style.boxShadow = `${this.X}px ${this.Y}px ${this.blur}px ${this.spred}px hsla(${this.H}, ${this.S}%,${this.L}%,${this.alpha/100})`;
      return style;
    }
  }
}
</script>
<style lang="scss" scoped>
.sectionHeight{
  height: 100vh;
}
.box {
  margin: auto;
  margin-top:30px;
  width: 100px;
  height: 100px;
  background: pink;
}
.flex{
  width: 400px;
  display: flex;
  span{
    flex:1;
  }
  input{
    flex:1;
    width: 40px;
  }
}

.black{
  background: rgba(40,40,40,1);
  color:#f0f0f0;
}
</style>
