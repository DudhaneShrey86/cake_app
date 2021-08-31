<template>
  <router-link :to="{name: 'Cakes', params: {'category_id': category._id}}">
    <div class="category-card grid-child">
        <img :src="'/images/'+category.image_link" alt="">
        <div class="absolute-div">
            <h5>{{ category.name }}</h5>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "CategoryCardComponent",
    props: ["category"],
}
</script>

<style>
.category-card{
    position: relative;
    border: 1px solid var(--light-grey);
    border-radius: 10px;
    overflow: hidden;
}
.category-card img{
    width: 100%;
    transition: all 0.2s ease;
}
.category-card:hover img{
    transform: scale(1.3);
}
.category-card .absolute-div{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    color: var(--light-grey);
    transition: all 0.2s ease;
    text-align: center;
}
.category-card:hover .absolute-div{
    opacity: 1;
}
</style>