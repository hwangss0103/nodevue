<template>
    <section>
        <div class="row">
            <div class="col-5">
                <table class="table">
                <!-- Table head -->
                <thead>
                    <tr>
                        <th>#</th>
                        <th><i class="fas fa-leaf mr-2 blue-text" aria-hidden="true"></i>제목</th>
                        <th><i class="fas fa-leaf mr-2 teal-text" aria-hidden="true"></i>상태</th>
                    </tr>
                </thead>
                <!-- Table head -->

                <!-- Table body -->
                <tbody>
                    <router-link :to="'/surveyList/surveyEdit/' + survey.id" v-for="survey in surveys" v-bind:key="survey.id" tag="tr" class="cursor-pointer">
                        <th scope="row">1</th>
                        <td><i class="far fa-gem mr-2 grey-text" aria-hidden="true"></i>{{survey.title}}</td>
                        <td><i class="fas fa-download mr-2 grey-text" aria-hidden="true"></i>{{stateStr(survey.state)}}</td>
                    </router-link>
                    <!-- <tr v-for="survey in surveys" v-bind:key="survey.id" class="cursor-pointer" @click="routeToDetail(survey)">
                        <th scope="row">1</th>
                        <td><i class="far fa-gem mr-2 grey-text" aria-hidden="true"></i>{{survey.title}}</td>
                        <td><i class="fas fa-download mr-2 grey-text" aria-hidden="true"></i>{{stateStr(survey.state)}}</td>
                    </tr> -->
                </tbody>
                <!-- Table body -->
                </table>
                <!-- Table  -->
            </div>
            <div class="col-7">
                <router-view/>
            </div>
        </div>
    </section>
</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
created() {
        this.getSurveys();
    },

    data() {
        return {
            surveys: []
        }
    },

    methods: {
        getSurveys(): void {
            const url = `${this.ApiUrl}surveys`;
            this.$http.get(url).then(
                (res: any) => {
                    if (res.status !== 200) {
                        alert('Cannot get Surveys!', );
                        return;
                    }
                    this.surveys = res.data;
                }
            )
        },

        routeToDetail(survey: any): void{
            this.$router.push('surveyEdit');
            console.log('디테일', survey);
        }
    }
})
    

</script>

<style scoped>
    
</style>