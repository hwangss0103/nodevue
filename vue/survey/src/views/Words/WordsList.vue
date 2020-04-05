<template>
    <div class="container bg mt-5 pt-5">
        <section>

            <div class="row">
                <div class="col" @click="router.go(-1)">
                    <h1><i class="fas fa-arrow-left"></i></h1>   
                </div>
                <div class="col-6">
                    <h1>{{id}}</h1>
                </div>
                <div class="col">
                    <!-- <h1><i class="fas fa-arrow-right"></i></h1>    -->
                </div>
            </div>

            <!-- <div class="title">
                <div class="w-10p">
                    <h1><i class="fas fa-arrow-left"></i></h1>                   
                </div>
                <div class="w-90p">
                     <h1>{{id}}</h1>
                </div>
            </div> -->
            <!-- Table  -->
            <table class="table">
            <!-- Table head -->
            <thead>
                <tr>
                    <th>#</th>
                    <th><i class="fas fa-leaf mr-2 blue-text" aria-hidden="true"></i>단어</th>
                    <th><i class="fas fa-leaf mr-2 teal-text" aria-hidden="true"></i>기타</th>
                    <th><i class="fas fa-leaf mr-2 indigo-text" aria-hidden="true"></i>등등</th>
                </tr>
            </thead>
            <!-- Table head -->

            <!-- Table body -->
            <tbody>
                <tr @click="routeToDetail('김치찌개')">
                    <th scope="row">1</th>
                    <td><i class="far fa-gem mr-2 grey-text" aria-hidden="true"></i>김치찌개</td>
                    <td><i class="fas fa-download mr-2 grey-text" aria-hidden="true"></i>Cell 2</td>
                    <td><i class="fas fa-book mr-2 grey-text" aria-hidden="true"></i>Cell 3</td>
                    </tr>
                <tr @click="routeToDetail('된장찌개')">
                    <th scope="row">2</th>
                    <td><i class="fas fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>된장찌개</td>
                    <td><i class="fas fa-gift mr-2 grey-text" aria-hidden="true"></i>Cell 5</td>
                    <td><i class="fas fa-image mr-2 grey-text" aria-hidden="true"></i>Cell 6</td>
                    </tr>
                <tr @click="routeToDetail('동태찌개')">
                    <th scope="row">3</th>
                    <td><i class="fas fa-magic mr-2 grey-text" aria-hidden="true"></i>동태찌개</td>
                    <td><i class="fas fa-table mr-2 grey-text" aria-hidden="true"></i>Cell 8</td>
                    <td><i class="fas fa-edit mr-2 grey-text" aria-hidden="true"></i>Cell 9</td>
                </tr>
            </tbody>
            <!-- Table body -->
            </table>
            <!-- Table  -->


        
        </section>
    </div>
</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
created() {
        this.getSurveys();
        this.getWordsList();
    },
    props: ['id'],
    data() {
        return {
            router: this.$router,
            words: []
        }
    },

    methods: {
        getWordsList(): void {
            const url = `${this.ApiUrl}words`;
            console.log('겟 워즈', url);
            this.$http.get(url).then(
                (res: any) => {
                console.log('데이터 보소', res.data);
                    if (res.status !== 200) {
                        alert('Cannot get Surveys!', );
                        return;
                    }
                    this.words = res.data;
                }
            )
        },
        getSurveys(): void {
            const url = `${this.ApiUrl}surveys`;
            console.log('겟 서베이', url);
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
        routeToDetail(param: string): void {
            this.router.push({
                path: `/words/wordsDetail/${param}`
            });
        }
    }
})
    

</script>

<style scoped>
    .title {
        display: flex;
    }

</style>