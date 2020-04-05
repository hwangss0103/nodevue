<template>
    <div class="container bg mt-5 pt-5">
        <div class="row">
            <div class="col" @click="router.go(-1)">
                <h1><i class="fas fa-arrow-left"></i></h1>   
            </div>
            <div class="col-6">
                <h2>{{id}}</h2>
            </div>
            <div class="col">
                <!-- <h1><i class="fas fa-arrow-right"></i></h1>    -->
            </div>
        </div>
        <section>
            <img v-if="id === '김치찌개'" class="word-image" src="../../assets/김치찌개.jpg">
            <img v-if="id === '된장찌개'" class="word-image" src="../../assets/된장찌개.jpg">
            <img v-if="id === '동태찌개'" class="word-image" src="../../assets/동태찌개.jpg">
        </section>
        <section>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-danger btn-rounded" @click="record()">
                        <i class="fas fa-record-vinyl"></i>
                    </button>
                </div>
                <div class="col">
                Contents
                </div>
                <div class="col">
                    <button type="button" class="btn btn-info btn-rounded" @click="listen()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
    created() {
        console.log('디테일', this.router, this.id);
    },
    props: ['id'],
    data() {
        return {
            router: this.$router,
            imgPath: `../../assets/${this.id}.jpg`
        }
    },

    methods: {
        listen(): void {
            alert('파일을 줘야지');
        },
        record(): void {
            alert('뭘눌러봐 눌르긴');
        }
    }
})
    

</script>

<style scoped>
    .word-image {
        width: 100%;
    }
</style>