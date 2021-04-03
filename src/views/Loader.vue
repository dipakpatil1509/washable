<template>
    <div class="loader">
      <div class="preloader-wrapper medium active">
        <div class="spinner-layer">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.loader{
    position: fixed;
    top:0;
    bottom: 0;
    right:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.spinner-layer{
    border-color:  #03092D;
}
</style>