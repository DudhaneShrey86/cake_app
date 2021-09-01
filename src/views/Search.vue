<template>
  <div id="search-page">
    <form id="search-header" ref="searchHeader" action="" method="get" @submit.prevent="searchCakes">
      <label for="search"><i class="fas fa-search"></i></label>
      <input type="text" @focus="addFocus" @blur="removeFocus" id="search" ref="search" v-model="searchText" placeholder="Search a Cake">
    </form>
    <div class="container">
      <div id="search-results">
        <LoaderComponent ref="loader"></LoaderComponent>
        <div v-if="!searched">
          <h5 class="muted">Search something to see results here</h5>
        </div>
        <div v-else-if="searched && cakesArr.length == 0">
          <h5 class="muted">No results found! Try something else</h5>
        </div>
        <template v-else>
          <HorizontalCakeCardComponent v-for="cake in cakesArr" :key="cake._id" :cake="cake"></HorizontalCakeCardComponent>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalCakeCardComponent from '@/components/HorizontalCakeCardComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
export default {
  name: "Search",
  components: {
    HorizontalCakeCardComponent,
    LoaderComponent,
  },
  data(){
    return {
      searchText: "",
      cakesArr: [],
      searched: false,
    }
  },
  methods: {
    addFocus(){
      this.$refs.searchHeader.classList.toggle('active');
    },
    removeFocus(){
      this.$refs.searchHeader.classList.remove('active');
    },
    searchCakes(){
      this.$refs.loader.startLoading();
      this.searched = true;
      var v = this.$refs.search.value;
      this.axios.get("/getcakebysearch?search_string="+v)
      .then(res => {
        if(res.data.output == "success"){
          // got cakes, now show
          this.cakesArr = res.data.data;
        }
        else{
          console.log(res.data);
          this.$refs.loader.showError(res.data.data);
        }
        this.$refs.loader.stopLoading();
      })
    }
  }

}
</script>

<style>
#search-header{
    background: var(--red);
    display: flex;
    grid-gap: 20px;
    position: sticky;
    padding: 0 16px;
    top: 0;
    align-items: center;
    color: var(--light-grey);
    transition: all 0.2s ease;
}
#search-header.active{
  background: var(--yellow);
}
#logo{
    font-size: 1.8rem;
}
#search{
  padding: 15px 10px;
  width: 100%;
  font-size: 1rem;
  color: white;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
}
#search-results{
  display: grid;
  grid-gap: 15px;
}
.muted{
  color: var(--fade-blue);
}
</style>