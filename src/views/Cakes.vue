<template>
  <div id="cakes-page">
      <AppHeaderComponent :title="categoryName"></AppHeaderComponent>
      <div class="container">
        <LoaderComponent ref="loader"></LoaderComponent>
        <div class="cakes-list">
          <div class="grid-container">
            <CakeCardComponent v-for="cake in cakesArr" :key="cake._id" :cake="cake"></CakeCardComponent>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import AppHeaderComponent from '@/components/AppHeaderComponent.vue'
import CakeCardComponent from '@/components/CakeCardComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'

export default {
  name: "Cakes",
  props: ["category_id"],
  components: {
    AppHeaderComponent,
    CakeCardComponent,
    LoaderComponent,
  },
  data(){
    return {
      cakesArr: [],
      categoryName: "",
    }
  },
  mounted(){
    // get all cakes of this category
    this.$refs.loader.startLoading()
    this.axios.get("/getallcakes?category_id="+this.category_id)
    .then(res => {
      if(res.data.output == "success"){
        this.cakesArr = res.data.data;
      }
      else{
        this.$refs.loader.showError(res.data.data)
      }
      this.$refs.loader.stopLoading()
    })
    this.axios.get("/getcategory/"+this.category_id)
    .then(res => {
      if(res.data.output == "success"){
        this.categoryName = res.data.data.name;
      }
      else{
        this.$refs.loader.showError(res.data.data);
      }
    })
  }
}
</script>

<style>

</style>