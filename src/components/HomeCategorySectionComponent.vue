<template>
  <div class="category-section">
    <div class="category-header">
      <h5>{{ categoryName }}</h5>
      <router-link class="blue" :to="{name: 'Cakes', params: {'category_id': categoryId}}">
        <span>See all</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
    <div class="cakes-list">
      <div class="grid-container">
        <CakeCardComponent v-for="cake in cakesArr" :key="cake._id" :cake="cake"></CakeCardComponent>
      </div>
    </div>
  </div>
</template>

<script>
import CakeCardComponent from '@/components/CakeCardComponent'

export default {
  name: "HomeCategorySectionComponent",
  props: {
    "categoryId": {
      required: true,
      type: String,
    },
    "categoryName": {
      required: true,
      type: String,
    },
  },
  data(){
    return {
      cakesArr: [],
    }
  },
  components: {
    CakeCardComponent,
  },
  created(){
    // get cakes of a category
    this.axios.get("/getallcakes?limit=4&category_id="+this.categoryId)
    .then(res => {
      if(res.data.output == "success"){
        // got cakes
        this.cakesArr = res.data.data;
      }
      else{
        console.log(res.data);
      }
    })
  }
}
</script>

<style>
.category-section{
  margin-bottom: 25px;
}
.category-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>