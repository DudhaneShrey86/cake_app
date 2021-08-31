<template>
  <div id="home-page">
    <AppHeaderComponent title="All Recipes"></AppHeaderComponent>
    <div class="container">
      <HomeCategorySectionComponent v-for="category in categoriesArr" :key="category._id" :categoryId="category._id" :categoryName="category.name" ></HomeCategorySectionComponent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeaderComponent from '@/components/AppHeaderComponent.vue'
import HomeCategorySectionComponent from '@/components/HomeCategorySectionComponent.vue'

export default {
  name: 'Home',
  components: {
    AppHeaderComponent,
    HomeCategorySectionComponent,
  },
  data(){
    return {
      categoriesArr: [],
    }
  },
  created(){
    // get all categories
    this.axios.get('/getallcategories')
    .then(res => {
      if(res.data.output == "success"){
        this.categoriesArr = res.data.data
      }
      else{
        console.log(res.data);
      }
    })
  }
}
</script>
<style>
.container{
  padding: 16px;
}
</style>