<template>
    <div class="timeslot">
        <div class="modal">
            <div>
                <div v-if="loader" class="progress">
                    <div class="indeterminate"></div>
                </div>
                <form @submit.prevent="timeSlotSubmit">
                    <div class="modal-content mst">
                        <img class="logo" src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg" alt="">
                        <h4>Select Time Slot!</h4>
                        <p>Promise this one is the last.</p>
                        <div class="timeInput row">
                            <div class="input-field col s4">
                                <input type="number" id="from" min="1" max="12" v-model="from" name="from" class="validate" required>
                                <label for="from">
                                    From
                                </label>
                            </div>
                            <div class="input-field col s4">
                                <input type="number" id="to" min="1" max="12" v-model="to" name="to" class="validate" required>
                                <label for="to">
                                    To
                                </label>
                            </div>
                            <div class="input-field col s4">
                                <select name="period" class="browser-default" v-model="period" id="period" required>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <img src="../../assets/timeslot.jpg" alt="timeslot" class="herosvg">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn getotp waves-effect waves-dark">
                            Save Time Slot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
import { toast } from '../../functions/toasting'
export default {
    name:"timeslot",
    data(){
        return{
            loader:false,
            from:null,
            to:null,
            period:null,
        }
    },
    methods:{
        timeSlotSubmit(){
            if(this.from && this.to && this.period){
                console.log(this.from + '-' + this.to + " " + this.period);
                this.$router.push({ name: 'Bookings'})
            }else{
                toast("Enter the time properly")
            }
        }
    },
    watch:{
    },
    mounted(){
        var elems = document.querySelector('.modal');
        var options = {
            dismissible: false
        }
        var instance = M.Modal.init(elems, options);
        instance.open()
    }
}
</script>

<style lang="scss" scoped>
.timeslot{
    overscroll-behavior: none;
}
.herosvg{
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height:250px;
    display: block;
    margin:20px auto 0 auto;
    object-fit: contain;
}
.mst{
    margin-bottom: 10px;
}
.logo{
    width:150px;
    height:80px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
}
.timeslot .modal {
    min-height:auto !important;
    padding:20px 10px;
    max-width: 500px;
    max-height: 100% !important;
    top:5% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding-bottom: 80px;
}
.timeslot .modal::-webkit-scrollbar {
    display:none !important;
}
.timeslot .progress{
    position: absolute;
    top:-7px;
    left:0;
    right:0;
    background: rgba($color:#222, $alpha: 0.2);
}
.timeslot .progress .indeterminate{
    background:var(--textColor);
}
.timeslot .modal-content{
    text-align: center;
    padding-top: 20px;
}
.timeslot .modal-content h4{
    text-align: center;
    font-size:1.7rem;
    font-weight: 600;
    margin:20px 0 5px;
    font-style: normal;
    font-family: Poppins Medium, Arial;
}
.timeslot .modal-content p{
    font-size:1.2rem;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-family: Poppins Regular, Arial;
}
.timeslot .timeInput{
    margin-top:20px;
}
.timeslot .input-field {
    max-width: 400px;
    margin:10px auto 0;
}
.timeslot .input-field input{
    width:100%;
    border:1px solid var(--textColor);
    border-radius: 10px;
    padding:0 5px;
}
.input-field input:focus, 
.input-field input.valid,
.input-field input.invalid {
    border: 2px solid var(--textColor) !important;
    box-shadow: none !important;
    outline: none !important;
}

.input-field input.invalid {
    border: 1px solid red !important;
}
.timeslot .input-field label{
    padding: 0 5px;
    text-align: left;
}
input:focus + label,
input.valid + label{
    font-size:1.3rem;
    font-weight: 600;
    font-family: Poppins Medium, Arial;
    transform: translateY(-20px) scale(0.8) !important;
}
.timeslot select{
    border-radius: 10px;
    font-family: Poppins Medium;
    padding: 10px 5px !important;
    height: auto !important;;
    border:2px solid var(--textColor) !important;
}
.timeslot select option{
    border-radius: 10px;
    font-family: Poppins Medium;
}
.timeslot button.getotp{
    width:100%;
    height: 50px;
    font-weight: 400;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-family: roboto_regular, Arial;
    background:var(--buttonColor);
    border-radius: 4px;
    letter-spacing: 0.3rem;
    
}
.timeslot button.getotp:hover{
    background:var(--buttonHoverColor);
}
.timeslot .modal-footer{
    text-align: center !important;
}

@media screen and (max-width:518px){
    .timeslot .modal{
        position: fixed;
        top:0 !important;
        left:0 !important;
        bottom:0 !important;
        width:100%;
        min-height: -webkit-fill-available !important;
        padding:0;
        z-index:1234567;
        display: block !important;
        overflow: hidden;
    }
    .timeslot .modal-content{
        position: relative;
        padding-top:30px;
        height:88%;
        text-align: left !important;
    }
}
@media screen and (max-width:600px){
    .timeslot .modal-footer{
        position: fixed;
        bottom:-5px !important;
        height: 50px;
        left:0 !important;
        right:0 !important;
        padding:0 !important;
        margin-top: 0;
    }
    .timeslot button.getotp{
        position: fixed;
        bottom:0px !important;
        left:0 !important;
        right:0 !important;
        z-index: 12345 !important;
        border-radius: 0;
        margin:0 !important;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }
}
</style>