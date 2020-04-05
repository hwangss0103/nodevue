<template>
    <div class="container mt-5 pt-5">
        <section>


            <!-- <router-link to="/words" tag="li" class="nav-item">
                <button type="button" class="btn btn-primary btn-rounded" @click="routeToList('음식')">음식</button>
            </router-link> -->


            <div class="btn-row">
                <button type="button" class="btn btn-primary btn-rounded" @click="routeToList('음식')">음식</button>
                <button type="button" class="btn btn-default btn-rounded" @click="routeToList('여행')">여행</button>
            </div>

            <div class="btn-row">
                <button type="button" class="btn btn-secondary btn-rounded" @click="routeToList('사물')">사물</button>
                <button type="button" class="btn btn-success btn-rounded" @click="routeToList('날씨')">날씨</button>
            </div>

            <div class="btn-row">
                <button type="button" class="btn btn-info btn-rounded" @click="routeToList('기타')">기타</button>
                <button type="button" class="btn btn-warning btn-rounded" @click="routeToList('등등')">등등</button>
            </div>


        
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'adm',
    data() {
        return {
            router: this.$router
        }
    },
    created() {

    },

    methods: {
        routeToList(param: string): void {
            this.router.push({
                // path: `/words/wordsList/${param}`,
                name: 'wordsList',
                params: {id: param}
            });
        }
    }
})
    

</script>

<style scoped>
    
    .btn-row {
        flex-flow: row wrap;
        box-sizing: border-box;
        display: flex;
        max-height: 100%;
        place-content: stretch center;
        align-items: stretch;
    }

    .btn {
        width: 40%;
    }

    .btn-rounded {
        border-radius: 24px;
    }
    
</style>