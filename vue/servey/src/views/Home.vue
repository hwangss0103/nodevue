<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// _global.ts 에다가 전역으로 사용할 컴포넌트 들을 등록 해 놨으므로 여기서 따로 import 해올 필요가 없다.(_global.ts 주석 참조)
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  // components: {
  //   HelloWorld,
  // }
};
</script>
