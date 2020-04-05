<template>
  <div id="app">
    <Nav/>
    <main class="mt-5 pt-5">
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
  <!-- <div id="app">
    <Nav/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> 
    <router-view/>
  </div> -->
</template>

<style>
#app {
  height:100%;
  background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);


  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
