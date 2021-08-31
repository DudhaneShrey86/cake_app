<template>
  <div id="cakes-page">
      <AppHeaderComponent title="Cakes By Category"></AppHeaderComponent>
      <div class="container">
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

export default {
  name: "Cakes",
  props: ["category_id"],
  components: {
    AppHeaderComponent,
    CakeCardComponent,
  },
  data(){
    return {
      cakesArr: [],
    }
  },
  created(){
    // get all cakes of this category
    this.axios.get("/getallcakes?category_id="+this.category_id)
    .then(res => {
      if(res.data.output == "success"){
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

</style>