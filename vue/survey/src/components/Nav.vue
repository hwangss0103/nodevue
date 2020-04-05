<template>
    <!--Main Navigation-->
  <header>

    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container">

        <!-- Brand -->
         <router-link to="/" class="nav-item">
            <a class="navbar-brand waves-effect" href="#">
                <strong class="blue-text">한국어배우자</strong>
            </a>
         </router-link>

        <!-- Collapse -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <!-- Left -->
          <ul class="navbar-nav mr-auto">
            <!-- <router-link to="/adm" tag="li" class="nav-item">
                <a class="nav-link waves-effect" href="#">
                    관리자<span class="sr-only">(current)</span>
                </a>
            </router-link>

            <router-link to="/survey" tag="li" class="nav-item">
                <a class="nav-link waves-effect" href="#">
                    설문<span class="sr-only">(current)</span>
                </a>
            </router-link> -->

            <router-link to="/words" tag="li" class="nav-item">
                <a class="nav-link waves-effect" href="#">
                    단어<span class="sr-only">(current)</span>
                </a>
            </router-link>

            <!-- <li class="nav-item">
              <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                target="_blank">Free download</a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free
                tutorials</a>
            </li> -->
          </ul>

          <!-- Right -->
          <!-- <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a href="https://www.facebook.com/mdbootstrap" class="nav-link waves-effect" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="https://twitter.com/MDBootstrap" class="nav-link waves-effect" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="nav-link border border-light rounded waves-effect"
                target="_blank">
                <i class="fab fa-github mr-2"></i>MDB GitHub
              </a>
            </li>
          </ul> -->

        </div>

      </div>
    </nav>
    <!-- Navbar -->

  </header>

</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
created() {
        
    },

    data() {
        return {
            
        }
    },

    methods: {
        
    }
})
    

</script>

<style scoped>
    
</style>