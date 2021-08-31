<template>
  <div id="cake-details-page">
    <AppHeaderComponent :title="cake.name"></AppHeaderComponent>
    <div id="big-image-div" ref="bigImageDiv">
      
    </div>
    <div id="cake-content-div" class="container">
      <div>
        <h5>Ingredients:</h5>
        <ul>
          <li v-for="(ingredient, i) in cake.ingredients" :key="i">{{ ingredient }}</li>
        </ul>
      </div>
      <div>
        <h5>Recipe:</h5>
        <p v-html="cake.recipe"></p>
      </div>
      <div>
        <h5>Time to Prepare:</h5>
        <p>{{ cake.time }} mins</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderComponent from '@/components/AppHeaderComponent.vue'

export default {
  name: "CakeDetailsPages",
  props: ['_id'],
  components: {
    AppHeaderComponent,
  },
  data(){
    return {
      cake: {},
    }
  },
  mounted(){
    // get cake details
    this.axios.get("/getcake/"+this._id)
    .then(res => {
      if(res.data.output == "success"){
        // got cake
        this.cake = res.data.data;
        this.$refs.bigImageDiv.style.backgroundImage = "url('/images/"+this.cake.image_link+"')";
      }
    })
  },
}
</script>

<style>
#big-image-div{
  height: 300px;
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#cake-content-div{
  margin-top: -40px;
  background: var(--light-blue-grey);
  border-radius: 30px 30px 0 0;
  padding-top: 20px;
  box-shadow: 0px -1px 10px rgba(92, 102, 107, 0.8);
}
ul li{
  padding: 5px;
}
#cake-content-div h5{
  color: var(--red);
  margin-top: 25px;
}
</style>