<template>
    
    <section class="container">


       <div v-if="!EventBus.isAmin">
           <div class="md-form w-75">
               <i class="fa fa-key prefix"></i>
               <input type="password" id="aminKey" v-model="adminKey" class="form-control">
               <label for="adminKey">Admin Key</label>
           </div>
       </div>


       
    </section>
</template>

<script >
import Vue from 'vue';

export default Vue.extend({
    name: 'adm',
    beforeCreate() {
        if (this.EventBus.isAdmin) {
            this.$router.replace('/surveyList')
        }
    },
    created() {
        this.$watch('adminKey', this.$_.debounce(this.checkAminKey, 300))
    },

    data() {
        return {
            adminKey: null
        }
    },

    methods: {
        checkAminKey() {
            this.$http.post(this.ApiUrl + 'adminkey', {key: this.adminKey}).then(ret => {
                if (ret.status === 200) {
                    console.log('pass!!!');
                    this.EventBus.isAdmin = true;
                    this.$router.push('surveyList');
                }
            })
        }
    }
})
    

</script>

<style scoped>

    .bg {
        background: rgb(34,193,195);
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(252,194,69,1) 100%);
    }

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