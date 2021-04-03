<template>
    <div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'Home',
    computed:{
        ...mapGetters([
            'getUser',
            'getUserType',
        ])
    },
    created(){
        console.log(this.getUserType, this.getUser, );
        if(this.getUser){
            if(this.getUserType === 0)
                this.$router.push({ name: 'User', params: { 'user':this.getUser } })
            else
                this.$router.push({ name: 'Provider', params: { 'user':this.getUser } })
        }else{
            if(this.$route.name === "User" || this.$route.name === "Home")
                this.$router.push({'name':'Login', params:{'userType':0}})
            else if (this.$route.name === "Provider")
                this.$router.push({'name':'Login', params:{'userType':1}})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>