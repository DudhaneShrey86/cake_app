<template>
  <div id="app-header">
      <i class="fas fa-birthday-cake" id="logo"></i>
      <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {
    name: "AppHeaderComponent",
    props: {
        title: {
            type: String,
            default: "Cake App",
        }
    }
}
</script>

<style>
#app-header{
    background: var(--red);
    display: flex;
    grid-gap: 25px;
    position: sticky;
    top: 0;
    padding: 10px 16px;
    align-items: center;
    color: var(--light-grey);
}
#app-header h4{
    margin: 0;
}
#logo{
    font-size: 1.8rem;
}
</style>