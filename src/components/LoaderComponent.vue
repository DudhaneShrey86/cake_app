<template>
  <div id="loader-div" v-if="isLoading">
      <i class="fas" :class="loaderClass"></i>
      <h5>Loading</h5>
  </div>
</template>

<script>
export default {
    name: "LoaderComponent",
    data(){
        return {
            isLoading: false,
            loaderText: 'Loading',
            loaderClass: 'fa-spinner'
        }
    },
    methods: {
        startLoading(){
            this.isLoading = true;
        },
        stopLoading(){
            this.isLoading = false;
        },
        showError(text){
            this.loaderText = text;
            this.loaderClass = 'fa-times error';
        }
    }
}
</script>

<style>
#loader-div{
    color: var(--fade-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    flex-direction: column;
}
#loader-div .fa-spinner{
    animation: rotateIcon 1s infinite linear;
}
#loader-div .error{
    color: var(--red);
}
@keyframes rotateIcon {
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

</style>