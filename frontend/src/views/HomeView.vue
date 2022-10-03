<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <HeaderMenuVue />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HeaderMenuVue from '@/components/headerMenu/HeaderMenu.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    HeaderMenuVue,
  },
});
</script>
