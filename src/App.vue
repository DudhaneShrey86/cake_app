<template>
  <div id="app-container">
    <div id="page-container">
      <router-view/>
    </div>
    <nav id="navbar">
      <router-link to="/">
        <i class="fas fa-home"></i>
          <span>Home</span>
      </router-link>
      <router-link to="/search">
        <i class="fas fa-search"></i>
          <span>Search</span>
      </router-link>
      <router-link to="/categories">
        <i class="fas fa-utensils"></i>
          <span>Categories</span>
      </router-link>
    </nav>
  </div>
</template>

<style>
:root{
  --yellow: #FFD371;
  --dark-yellow: #e3aa2b;
  --red: #FF4848;
  --light-blue: #C2FFD9;
  --fade-blue: #678a9c;
  --light-blue-grey: #f2f4f5;
  --light-grey: #efefef;
  --grey: #d3d3d3;
}
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: var(--light-blue-grey)
}
h4, h5, h6{
  margin: 15px 0 15px 0;
  font-family: 'Montserrat', sans-serif;
}
h4{
  font-size: 1.3rem;
  letter-spacing: 0.03rem;
}
h5{
  font-size: 1.15rem;
  letter-spacing: 0.02rem;
}
h6{
  font-size: 1rem;
  font-weight: 500;
}
p{
  line-height: 1.25rem;
}
a{
  color: inherit;
  text-decoration: none;
}
a.blue{
  color: #3d90e3;
}
a.blue i{
  margin-left: 5px;
  transition: all 0.2s ease;
}
a.blue:hover{
  text-decoration: underline;
}
a.blue:hover i{
  transform: translateX(3px);
}
#page-container>div{
  height: 100%;
  overflow: auto;
}
#app-container{
  max-width: 546px;
  margin: 0 auto;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: calc(100vh - 55px) 55px;
}
#navbar{
  display: grid;
  height: 55px;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--yellow);
  color: #574d38;
}
#navbar a{
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#navbar a i{
  font-size: 1.1rem;
}
#navbar a span{
  font-size: 0.9rem;
  margin-top: 2px;
}
#navbar a.router-link-exact-active {
  color: var(--red);
}
.grid-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}
</style>
