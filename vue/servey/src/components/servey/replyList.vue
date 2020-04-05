<template>
    <div>
        <h3>리스트 입니당 {{message}}</h3>
        <div>
            <button v-on:click="replyForm()">New Reply</button>
        </div>
        <div>
            <ul>
                <li v-for="reply in replyList" v-bind:key="reply.id">
                    <a class="rno-select" v-on:click="replyForm(reply)">{{reply.rno}}</a> <input v-model="reply.replytext" placeholder="여기를 수정해보세요"> <button v-on:click="updateReply(reply)">Update</button>
                </li>
            </ul>
        </div>
    </div>
</template>



 <script lang="ts">
    import Vue from 'vue';
    import axios from 'axios';
    import { EventBus } from'@/main';

    export default Vue.extend({
        name: 'replyList',
        components: {

        },
        data() {
            return {
                message: 'Hello!!',
                replyList: []
            }
        },
        
        created() {
            this.getReplyList();
        },
        methods: {
            getReplyList(): void {
                axios.get('http://localhost:7000/apis/replies/265').then(
                    res => {
                    const tempArr: any = res;
                    if (res.status !== 200) {
                        return [];
                    }
                    this.replyList = res.data;
                    }
                )
            },

            replyForm(reply?: any): void {
                const article = reply || {rno: '', bno: '265', replyer: 'hwangss', replytext: ''};
                EventBus.$emit('reply-selected', article);
            },
            updateReply(reply: any): void {
                axios.put('http://localhost:7000/apis/replies/265/' + reply.rno, reply).then(
                    res => {
                    console.log(' saveReply.ret >> ', res);
                    if (res.status !== 200) {
                        return [];
                    }
                    alert(res.data + '개의 댓글이 수정되었습니다');
                    }
                )
            }
        }
    });
</script>

<style scoped>
    .rno-select {
        cursor: pointer;
    }
</style>