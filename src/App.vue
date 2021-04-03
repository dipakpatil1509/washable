<template>
  <router-view/>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      navbarExcluded:["class", "Register", "Timeslot"],

    }
  },
  created(){
    
  }
}
</script>

<style lang="scss">
:root{
  --backgroundColor:#fff;
  --textColor:#222;
  --buttonColor:#444;
  --buttonHoverColor:#444;
}
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
@font-face {
  font-family:Poppins Bold;
  src: url('./fonts/Poppins/Poppins-Bold.ttf');
}
@font-face {
  font-family:Poppins Regular;
  src: url('./fonts/Poppins/Poppins-Regular.ttf');
}
@font-face {
  font-family:Poppins Medium;
  src: url('./fonts/Poppins/Poppins-Medium.ttf');
}
body{
  background-color: var(--backgroundColor);
  color: var(--textColor);
  scrollbar-width: none; /* Scrollbar hide for Moz-Firefox */
  -ms-overflow-style: none; /*scroll hide for edge */
  font-family:Poppins Regular;
}
/* Scrollbar Hide */
body::-webkit-scrollbar,
::-webkit-scrollbar{
    display: none;
}

/* Hide the increment and decrement buttons in Input type number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

/* Toast Container Css */
#toast-container{
    right:0 !important;
    left:0 !important;
    top:10% !important;
    bottom:auto !important;
    max-width:100% !important;
}
.custom-toast{
    margin:10px auto;
    width:auto !important;
    max-width:380px !important;
    background: #555 !important;
    text-align: center !important;
}

/* label focus color */
input:focus + label,
input.valid + label,
input.invalid + label {
    color:var(--textColor) !important;
    font-size:1rem;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    font-family: Poppins Medium, Arial;
}
input.invalid + label {
  color:red !important;
}
/* label underline focus color */
.input-field input:focus, 
.input-field input.valid {
    border-bottom: 1px solid var(--textColor) !important;
    box-shadow: 0 1px 0 0 var(--textColor)!important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus{
    -webkit-box-shadow: 0 0 0px 1000px rgba(250,250,250,1) inset !important;
    box-shadow: 0 0 0 1000px rgba(250,250,250,1) inset !important;
    background: transparent !important;
    -webkit-text-fill-color: #000 !important;
}
</style>
