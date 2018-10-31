<template>
  <div id="app">
    <logo></logo>
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/navBar'
import Logo from './components/logo'

export default {
  name: 'App',
  data() {
    return {
      data: {
        contributor: 0
      }
    }
  },
  components: {
    NavBar,
    Logo
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
	  overflow-x:hidden; 
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: white;
    text-decoration: none;
  }

  section{
    width: 100%;
    height: 100vh;
    position: relative;
  }

  h2.title {
    font-size: 40px;
    margin: 0;
    padding: 0;
    font-family: 'Exo';
    text-align: center;
    transform: translateY(20px);
  }

  @media screen and (max-width: 400px) {
		section {
			height: auto;
    }
    
    h2.title {
      font-size: 30px;
    }
  }
</style>

