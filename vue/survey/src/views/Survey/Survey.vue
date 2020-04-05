<template>
    <div class="container">
      <!--Section: Jumbotron-->
      <section class="card blue-gradient wow fadeIn" id="intro">

        <!-- Content -->
        <div class="card-body text-white text-center py-5 px-5 my-5">

          <h1 class="mb-4">
            <strong>설문 시스템</strong>
          </h1>
          <p>
            <strong>Best & free guide of responsive web design</strong>
          </p>
          <p class="mb-4">
            <strong>설문에 응해 주셔서 감사합니다. 의견을 수렴하여 더 좋은 서비스로 보답하겠습니다.</strong>
          </p>
          <div v-if="surveys.length">
            <div v-for="survey in surveys" :key="survey.id">
              <router-link :to="'survey/surveyInfo/' + survey.id" class="btn btn-outline-white btn-lg">
                {{survey.title}}
                <i class="fas fa-send ml-2"></i>
              </router-link>
            </div>
          </div>
          <div v-else class="text-warning">오픈된 설문이 없습니다.</div>

        </div>
        <!-- Content -->
      </section>
    </div>
</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
created() {
        this.getData();
        // this.fetchReplies();
    },

    data() {
        return {
            surveys: [{
              id: '아이뒤', title: '설문 1'
            },
            
            {
              id: '설문2', title: '설문 2입니당'
            }
            ]
        }
    },

    methods: {

      getData(): void {
      let url = this.ApiUrl + 'surveys';
      this.$http.get(url).then(
        res => {
          console.log(' saveReply.ret >> ', res);
          if (res.status !== 200) {
            alert(' Error on get Surveys!!');
            return [];
          }
        }
      )
    },

    fetchReplies() {
      this.$http.get('http://localhost:7000/apis/replies/265').then(
        res => {
          if (res.status !== 200) {
            return [];
          }
        }
      )
    },
    }
})
    

</script>

<style scoped>
    
</style>