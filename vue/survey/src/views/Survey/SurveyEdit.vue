<template>
   <!-- Material form login -->
    <div class="card">

    <h5 class="card-header info-color white-text text-center py-4">
        <strong>{{survey.title}}</strong>
        <a @click="toggleSurveyEditing()" class="pull-right"><i class="fa fa-edit"></i></a>
    </h5>

    <!--Card content-->
    <div v-if="isEditing" class="card-body px-lg-5 pt-0">

        <!-- Form -->
        <form class="text-center" style="color: #757575;" action="#!">

        <!-- Email -->
        <div class="md-form">
            <input type="text" id="title" v-model="survey.title" class="form-control">
            <label for="title">설문제목</label>
        </div>

        <!-- Password -->
        <div class="md-form">
            <input type="text" id="state" v-model="survey.state" class="form-control">
            <label for="state">상태</label>
        </div>

        <div class="d-flex justify-content-around">
            <!-- Sign in button -->
            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 m-2" type="submit" @click="toggleSurveyEditing()">취소</button>
            <button class="btn btn-outline-danger btn-rounded btn-block my-4 waves-effect z-depth-0 m-2" type="submit">삭제</button>
            <button class="btn btn-outline-primary btn-rounded btn-block my-4 waves-effect z-depth-0 m-2" type="submit">저장</button>
        </div>


        </form>
        <!-- Form -->

    </div>

    </div>
    <!-- Material form login -->
</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
    created() {
        this.getTargetSurvey();

    },
    props: ['id'],
    data() {
        return {
            survey: {},
            isEditing: false

        }
    },

    methods: {
        getTargetSurvey(): void {
            const url = `${this.ApiUrl}surveys`;
            this.$http.get(`${url}/${this.id}`).then(
                res => {
                    if (res.status !== 200) {
                        this.survey = {};
                        return;
                    }
                    this.survey = res.data;
                }
            );
        },
        toggleSurveyEditing(): void {
            this.isEditing = !this.isEditing;
        }
    }
})
    

</script>

<style scoped>
    
</style>