<template>
    <div>
        <Loader v-if="loader" />
        <Navbar />
    </div>
</template>

<script>
import Loader from '../Loader.vue'
import Navbar from './Navbar'
export default {
    name:"Bookings",
    data(){
        return{
            bookings:[],
            loader:false,
        }
    },
    components:{
        Loader,
        Navbar,
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>

</style>