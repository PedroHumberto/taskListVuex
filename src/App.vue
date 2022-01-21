<template>
  <div>
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/register">SingUp</router-link>
      </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  *{
    padding: 0;
    margin: 0;
  }
  nav{
    margin: 15px auto;
    text-align: center;
  }
  .navbar a{
    color: rgb(39, 139, 35);
    font-size: 23px;
    text-decoration: none;
    margin-left: 15px;
  }
  h1{
    margin-top: 15px;
    text-align: center;
  }
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 4px 5px 3px rgba(92, 92, 92, 0.712);
    margin: 40px auto;
    width: 500px;
    background: rgb(223, 231, 255);
  }


</style>
