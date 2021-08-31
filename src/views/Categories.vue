<template>
  <div id="categories-page">
    <AppHeaderComponent title="All Categories"></AppHeaderComponent>
    <div class="container">
      <div class="grid-container">
        <CategoryCardComponent v-for="category in categoriesArr" :key="category._id" :category="category"></CategoryCardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderComponent from '@/components/AppHeaderComponent.vue'
import CategoryCardComponent from '@/components/CategoryCardComponent.vue'

export default {
  name: "Categories",
  components: {
    AppHeaderComponent,
    CategoryCardComponent,
  },
  data(){
    return {
      categoriesArr: [],
    }
  },
  created(){
    // get all categories
    this.axios.get("/getallcategories")
    .then(res => {
      if(res.data.output == "success"){
        this.categoriesArr = res.data.data
      }
      else{
        console.log(res.data);
      }
    })
  },
}
</script>

<style>

</style>