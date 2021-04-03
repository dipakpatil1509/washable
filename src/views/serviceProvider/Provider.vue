<template>
    <div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:"User",
    computed:{
        ...mapGetters([
            'getUser',
        ])
    },
    created(){
        if(this.getUser){
            this.$router.push({ name: 'Bookings'})
        }else{
            this.$router.push({'name':'Login', params:{'userType':1}})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>