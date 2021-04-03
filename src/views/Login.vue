<template>
    <div class="login">
        <div class="modal">
            <div>
                <div v-if="loader" class="progress">
                    <div class="indeterminate"></div>
                </div>
                <form v-if="!otpDiv" id="mobilenumberForm"  @submit.prevent="mobileNumberSubmit">
                    <div v-if="!otpDiv" class="modal-content mst">
                        <img class="logo" src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg" alt="">
                        <h4>Welcome to Washable!</h4>
                        <p>We’ll send a text with a verification code to confirm your identity.</p>
                        <div class="mobileInput">
                            <div class="input-field mobile_number">
                                <input id="mobile_number" type="tel" maxLength="10" pattern="[0-9]*" inputMode="numeric" v-model="mobileNumber" required class="validate" >
                                <label for="mobile_number">Mobile Number</label>
                                <p>{{mobileNumber ? mobileNumber.length : '0'}}/10</p>
                            </div>
                        </div>
                        <img src="../assets/login.jpg" alt="Login" class="herosvg">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn getotp waves-effect waves-dark">
                            Get Otp
                        </button>
                    </div>
                </form>
                <form @submit.prevent="otpSubmit" v-if="otpDiv" id="otpDiv">
                    
                    <div  class="modal-content mst">
                        <img class="logo" src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg" alt="">
                        <h4>Enter OTP</h4>
                        <p>Enter the verification code to confirm your identity.</p>
                        <div class="mobileInput">
                            <div class="input-field mobile_number">
                                <input id="otp" type="number" v-model="otp" class="validate" >
                                <label for="otp">One Time Password</label>
                            </div>
                            <p @click="otpDiv = false" class="changeNumber" >Change Number</p>
                        </div>
                        <img src="../assets/otp.png" alt="OTP" class="herosvg">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn getotp waves-effect waves-dark">
                            Confirm Otp
                        </button>
                    </div>
                </form>

                
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
import { toast } from '../functions/toasting'
export default {
    name:"Login",
    data(){
        return{
            mobileNumber:null,
            loader:false,
            otpDiv:false,
            otp:null,
        }
    },
    methods:{
        mobileNumberSubmit(){
            if(this.mobileNumber.length !== 10 || !this.mobileNumber.match(/^[0-9]{10}$/)){
                toast("Mobile number is invalid")
                return null
            }
            this.loader = true;
            console.log(this.mobileNumber);
            this.otpDiv = true;
            this.loader = false;
        },
        otpSubmit(){
            var vm =this;
            if(this.otp){
                vm.loader = true;
                console.log(vm.otp);
                vm.$router.push({"name":"Signup", params:{'userType':vm.$route.params.userType}});
            }else{
                toast("OTP is invalid")
            }
        },
        OTPDivUpdated(){
            setTimeout(() => {
                M.updateTextFields();
            }, 100);
        }
    },
    watch:{
        'otpDiv':{
            "handler":"OTPDivUpdated",
            immediate:true,
        }
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
.login{
    overscroll-behavior: none;
}
.herosvg{
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height:200px;
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
.login .modal {
    min-height:auto !important;
    padding:20px 10px;
    max-width: 500px;
    max-height: 100% !important;
    top:5% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
.login .modal::-webkit-scrollbar {
    display:none !important;
}
.login .progress{
    position: absolute;
    top:-7px;
    left:0;
    right:0;
    background: rgba($color:#222, $alpha: 0.2);
}
.login .progress .indeterminate{
    background:var(--textColor);
}
.login .modal-content{
    text-align: center;
    padding-top: 20px;
}
.login .modal-content h4{
    text-align: center;
    font-size:1.7rem;
    font-weight: 600;
    margin:20px 0 10px;
    font-style: normal;
    font-family: Poppins Medium, Arial;
}
.login .modal-content p{
    font-size:1rem;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-family: Poppins Regular, Arial;
}
.login .mobileInput{
    margin-top:20px;
}
.login .input-field {
    max-width: 400px;
    margin:40px auto 0;
}
.login .mobile_number{
    position: relative;
}
.login .mobile_number input{
    width:100%;
}
.login .mobile_number p{
    position: absolute;
    width: 13%;
    right:0;
    bottom:0;
    top:0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem !important;
}
.changeNumber{
    cursor: pointer;
    text-align: left !important;
    display: block;
    margin:5px 0 10px 0;
    font-family: Poppins Medium !important;
}
.oi{
    height: 20px;
    padding:0 1rem;
}
.login button.getotp{
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
.login button.getotp:hover{
    background:var(--buttonHoverColor);
}
.login .modal-footer{
    text-align: center !important;
}

@media screen and (max-width:518px){
    .login .modal{
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
    .login .modal-content{
        position: relative;
        padding-top:30px;
        height:88%;
        text-align: left !important;
    }
}
@media screen and (max-width:600px){
    .login .modal-footer{
        position: fixed;
        bottom:-5px !important;
        height: 50px;
        left:0 !important;
        right:0 !important;
        padding:0 !important;
        margin-top: 0;
    }
    .login button.getotp{
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