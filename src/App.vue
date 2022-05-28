<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <header>
    <img alt="jazro logo" class="logo" src="./assets/jazro.png" width="125" height="125" />
  </header>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display:contents;
  margin: 0 auto 2rem;
}
img{
    width: 100px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Nunito Sans', sans-serif;
    background-color: var(--bgColor);
    color: var(--textColor);
    transition: 0.2s;
}

container{
        width: 100%;
        padding: 100%;
        display: flex;
        justify-content: space-betweens;
}
.container:nth-child(1){
    box-shadow: 0 0 5px rgba(0, 0, 0, 3);
}
  
.form-control{
  width: 400px;
  box-shadow:0,0,5 rgba(0, 0, 0, 3);
  position: relative;
}
.form-control input{
  width: 100%;
  padding:17px 14px;
  outline:0;
  border:0;
  font-size: 16px;
}
.form-control{ 
  position: absolute;
  top:1rem;
  right: 1rem;
}