<template>
  <router-link :to="{name: 'CakeDetailsPage', params: {'_id': cake._id}}">
    <div class="cake-card horizontal-card grid-child">
        <div class="image-div">
                <img :src="'/images/' + cake.image_link" alt="">
        </div>
        <div class="card-content">
            <h6>{{cake.name}}</h6>
            <p class="time-text"><i class="fas fa-stopwatch"></i> {{cake.time}} mins</p>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "HorizontalCakeCardComponent",
    props: ["cake"],
}
</script>

<style>
.cake-card{
    padding: 15px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 1px 10px rgba(135, 149, 156, 0.2);
    transition: all 0.2s ease;
}
.cake-card:hover{
    box-shadow: 0px 2px 15px rgba(92, 102, 107, 0.3);
}
.horizontal-card{
    display: grid;
    grid-template-columns: 110px auto;
    grid-gap: 15px;
}
.horizontal-card h6{
    margin-top: 5px;
}
.image-div img{
    width: 100%;
    border-radius: 5px;
    max-height: 110px;
    object-fit: cover;
    object-position: top;
    transition: all 0.2s ease;
}
.time-text{
    color: var(--fade-blue);
    font-size: 0.9rem;
}
</style>