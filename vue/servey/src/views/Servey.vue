<template>
    <div class="servey">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>안녕하시렵니까</h1>
        <div>
            <ReplyList></ReplyList>
        </div>
        <div>
            <ReplyForm></ReplyForm>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import ReplyList from '@/components/servey/replyList';
import ReplyForm from '@/components/servey/replyForm';

export default Vue.extend({
    name: 'servey',
    components: {
        ReplyList,
        ReplyForm
    },
    created() {
    },
});
</script>

<style>

</style>