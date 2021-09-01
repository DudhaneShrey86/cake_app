<template>
  <div id="home-page">
    <AppHeaderComponent title="All Recipes"></AppHeaderComponent>
    <div class="container">
      <LoaderComponent ref="loader"></LoaderComponent>
      <HomeCategorySectionComponent v-for="category in categoriesArr" :key="category._id" :categoryId="category._id" :categoryName="category.name" ></HomeCategorySectionComponent>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeaderComponent from '@/components/AppHeaderComponent.vue'
import HomeCategorySectionComponent from '@/components/HomeCategorySectionComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'


export default {
  name: 'Home',
  components: {
    AppHeaderComponent,
    HomeCategorySectionComponent,
    LoaderComponent,
  },
  data(){
    return {
      categoriesArr: [],
    }
  },
  mounted(){
    // get all categories
    this.$refs.loader.startLoading();
    this.axios.get('/getallcategories')
    .then(res => {
      if(res.data.output == "success"){
        this.categoriesArr = res.data.data
      }
      else{
        this.$refs.loader.showError(res.data.data);
      }
      this.$refs.loader.stopLoading();
    })
  }
}
</script>
<style>
.container{
  padding: 16px;
}
</style>