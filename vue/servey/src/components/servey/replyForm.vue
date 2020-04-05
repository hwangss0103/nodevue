<template>
    <div>
        <div>
            <input type="text" v-model="form.rno"/>
        </div>
        <div>
            <textarea class="replytext" v-model="form.replytext"></textarea>
        </div>
        <div>
            <button v-on:click="saveReply()">Save</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventBus }  from '@/main';

export default Vue.extend({
    name: 'replyForm',
    props: ['formProp'],
    data() {
        return {
            // form: this.formProp
            form: {
                rno: '',
                replytext: ''
            }
        }
    },
    created() {
        EventBus.$on('reply-selected', (reply: any) => {
            this.form = reply;
        })
    },
    methods: {
        saveReply(): void {
            console.log('저장하자', this.form);
        }
    },
});
</script>

<style scoped>
    .replytext {
        height: 200px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>