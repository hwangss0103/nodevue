<template>
    <div class="container">
        인포
    </div>
</template>

<script  lang="ts">
import Vue from 'vue';

export default Vue.extend({
    created() {
        console.log('뽈깍', this.id);
    },
    props: ['id'],
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