<template>
    <div>
        <h1>This is Post: {{$route.params.id}}</h1>
        <div>Replyer: {{post.replyer}}</div>
        <div>Content: {{post.replytext}}</div>
    </div>
</template>

<script>
    export default {
        created() { // router 를 통해서 들어온 view는 한번만 생성되므로 다른데에 갔다와도 created는 호출되지 않는다.
            this.init('from Created');
            console.log("Post >> ", this.$route.fullPath, this.$route.params, this.$route.query);
            this.id = this.$route.params.id; // 처음 한번만 수행
        },
        // Componenet와 달리 router를 통한 view는 한번 생성되고 다시 라우팅 하면 재생성 되지 않는다. 그래서 created가 매번 돌지 않는다.
        // 그래서 아래처럼 watch를 걸어주어 상태 변화감지를 시행한다.
        watch: {
            '$route': { // 변수 $route를 주시하고 있다가 변경이 발생하면 init을 실행 한다.
                handler: 'getPostInfo',
                immediate: true // $route 에 대한 옵저버가 생성되자마자 기본으로 한번 타고 시작하겠다는 의미
            }
        },

        methods: {
            init(from) {
                console.log('init 함수 실행', from);
            },
            getPostInfo() {
                console.log('보내라이', this.id);
                this.$http.get(`http://localhost:7000/apis/replies/265/${this.$route.params.id}`).then(
                    res => {
                    if (res.status !== 200) {
                        return {};
                    }
                    this.post = res.data;
                    console.log('Post 한개 보기', this.post);
                    }
                )
            }
        },

        data() {
            return {
                id: 0,
                post: [
                    {id: 1, title: '번 글입니다.'},
                    {id: 2, title: '번 글입니다.'}
                ]
            };
        }
    }
</script>