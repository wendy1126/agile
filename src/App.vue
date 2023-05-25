<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-brand">AGILE</div>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item p-2">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link to="/detail">detail</router-link>
          </li>
          <li class="nav-item p-2">
            <router-link to="/invoice">Invoice</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <MuneName />
  <router-view />

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/detail">detail</router-link> |
    <router-link to="/invoice">Invoice</router-link>
    <router-view />
  </nav> -->
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.navbar-brand {
  font-weight: bold;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #0c69f1;
}
</style>
