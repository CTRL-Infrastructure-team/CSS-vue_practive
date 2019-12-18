import Vue from 'vue';


import headerComponent from '~/components/header/sample';
import mainimg from '~/components/mainimg/sample';
import sample from '~/components/UnderStoodCss/sample';


Vue.mixin({
  components:{
    sample,
    headerComponent
  }
})
