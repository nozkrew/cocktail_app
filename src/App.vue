<template>
  <div id="app">
    <NavBar/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import "bootswatch/dist/minty/bootstrap.min.css"; 

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
