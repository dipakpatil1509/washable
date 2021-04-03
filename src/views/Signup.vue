<template>
    <div class="signup">
        <div class="modal">
            <div>
                <div v-if="loader" class="progress">
                    <div class="indeterminate"></div>
                </div>
                <form @submit.prevent="submitDetails">
                    <div class="modal-content mst">
                        <img class="logo" src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg" alt="">
                        <h4>Sign up</h4>
                        <p>Provide us with few basic details to get you started.</p>
                        <div class="signupForm row">
                            <div class="input-field col s12">
                                <input id="name" type="text" name="name" class="validate" v-model="name" required >
                                <label for="name">Name</label>
                            </div>
                            <div class="input-field col s4">
                                <input id="pincode" min="100000" type="number" name="pinCode" v-model="pincode" class="validate" required>
                                <label for="pincode">Pin Code</label>
                            </div>
                            <div class="input-field col s8">
                                <input id="area" type="text" name="area" class="validate" v-model="area" required/>
                                <label for="area">Area/Locality</label>
                            </div>
                            <div class="input-field col s12">
                                <textarea id="address" name="address" class="materialize-textarea " v-model="address" required></textarea>
                                <label for="address">Address</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="district" name="district" type="text" class="validate" v-model="district" required />
                                <label for="district">District</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="state" name="state" type="text" class="validate" v-model="state" required />
                                <label for="state">State</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn getotp waves-effect waves-dark">
                            Save & Continue
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
    name:"signup",
    data(){
        return{
            loader:false,
            name:null,
            pincode:null,
            area:null,
            address:null,
            district:null,
            state:null,
        }
    },
    methods:{
        keyboardPosition(height){
            window.addEventListener("resize", function(){
                if(window.innerHeight < height * 0.7){
                    document.querySelector('.signup .modal-footer').style.position = "relative"
                    document.querySelector('.signup button.confirm').style.position = "absolute"
                }else{
                    document.querySelector('.signup .modal-footer').style.position = "fixed"
                    document.querySelector('.signup button.confirm').style.position = "fixed"
                }
            })
        },
        submitDetails(){
            this.loader = true;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, showError);
            } else {
                toast("Geolocation is not supported by this browser.");
            }
            function showError(error) {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        toast("User denied the request for Geolocation.")
                    break;
                    case error.POSITION_UNAVAILABLE:
                        toast("Location information is unavailable.")
                    break;
                    case error.TIMEOUT:
                        toast("The request to get user location timed out.")
                    break;
                    case error.UNKNOWN_ERROR:
                        toast("An unknown error occurred.")
                    break;
                }
            }


        },
        showPosition(position) {
            var vm =this;
            var location = {
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            }
            
            let options = {
                name: vm.name,
                pincode: vm.pincode,
                area : vm.address,
                address :vm.address,
                district :vm.district,
                state : vm.state,
                location,
            }
            
            console.log(options);

            if(this.$route.params.userType === "1"){
                this.$router.push({"name":"TimeSlot"})
            }else{
                this.$router.push({"name":"BookLaundry"})
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
        const mobileCheck = function() {
            let check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };
        if(mobileCheck()){
            this.keyboardPosition(window.innerHeight);
        }else{
            try {
                this.keyboardPosition(window.innerHeight);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.signup{
    overscroll-behavior: none;
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
.signup .modal {
    min-height:auto !important;
    padding:20px 10px;
    max-width: 500px;
    max-height: 100% !important;
    top:5% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
.signup .modal::-webkit-scrollbar {
    display:none !important;
}
.signup .progress{
    position: absolute;
    top:-7px;
    left:0;
    right:0;
    background: rgba($color:#222, $alpha: 0.2);
}
.signup .progress .indeterminate{
    background:var(--textColor);
}
.signup .modal-content{
    text-align: center;
    padding-top: 20px;
    max-height: 90vh;
    overflow-y: auto;
}
.signup .modal-content h4{
    text-align: center;
    font-size:1.7rem;
    font-weight: 600;
    margin:20px 0 10px;
    font-style: normal;
    font-family: Poppins Medium, Arial;
}
.signup .modal-content p{
    font-size:1rem;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-family: Poppins Regular, Arial;
}
.signup .mobileInput{
    margin-top:20px;
}
.signup .input-field {
    max-width: 400px;
    margin:10px auto;
}
.signup .mobile_number{
    position: relative;
}
.signup .mobile_number input{
    width:100%;
}
.signup .mobile_number p{
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
.signup button.getotp{
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
.signup button.getotp:hover{
    background:var(--buttonHoverColor);
}
.signup .modal-footer{
    text-align: center !important;
}

@media screen and (max-width:518px){
    .signup .modal{
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
    .signup .modal-content{
        position: relative;
        padding-top:30px;
        height:88%;
        text-align: left !important;
    }
}
@media screen and (max-width:600px){
    .signup .modal-footer{
        position: fixed;
        bottom:-5px !important;
        height: 50px;
        left:0 !important;
        right:0 !important;
        padding:0 !important;
        margin-top: 0;
    }
    .signup button.getotp{
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