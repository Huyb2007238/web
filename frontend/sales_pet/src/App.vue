
<template>
  <HeaderView/>
    
  <RouterView />

  <FooterView/>
</template>
<script>
import RouterView from './router';
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
export default {
  components :{
    HeaderView,
    FooterView
  }
}
</script>

<style >

</style>
