<template>
  <header class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  position: fixed;
  display: flex;
  top: 0;
  height: 8rem;
  width: 100%;
  background-color: #F9F9F9;
}
.navbar div{
    flex: 1
};
.navbar .left {
    
    text-align: center;
}
</style>