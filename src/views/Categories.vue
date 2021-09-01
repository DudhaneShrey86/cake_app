<template>
  <div id="categories-page">
    <AppHeaderComponent title="All Categories"></AppHeaderComponent>
    <div class="container">
      <LoaderComponent ref="loader"></LoaderComponent>
      <div class="grid-container">
        <CategoryCardComponent v-for="category in categoriesArr" :key="category._id" :category="category"></CategoryCardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderComponent from '@/components/AppHeaderComponent.vue'
import CategoryCardComponent from '@/components/CategoryCardComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'

export default {
  name: "Categories",
  components: {
    AppHeaderComponent,
    CategoryCardComponent,
    LoaderComponent,
  },
  data(){
    return {
      categoriesArr: [],
    }
  },
  mounted(){
    this.$refs.loader.startLoading();
    // get all categories
    this.axios.get("/getallcategories")
    .then(res => {
      if(res.data.output == "success"){
        this.categoriesArr = res.data.data
      }
      else{
        this.$refs.loader.showError(res.data.data);
      }
      this.$refs.loader.stopLoading();
    })
  },
}
</script>

<style>

</style>