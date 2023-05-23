<template>
  <contariner>
    <header class="p-5">
      <h1>청구서 발행</h1>
      <p>고객의 청구서를 생성하고 이메일로 보내는 작업을 합니다.</p>
    </header>

    <div class="menuList">
      <ul>
        <li class="nav-item p-3">
          <router-link to="#">클라우드 서비스</router-link>
        </li>
        <li class="nav-item p-3">
          <router-link to="#">급여대행 서비스</router-link>
        </li>
        <li class="nav-item p-3">
          <router-link to="#">유지보수</router-link>
        </li>
      </ul>
    </div>
    <hr class="hrLine" />
  </contariner>
</template>

<style scoped>
* {
  color: #2c3e50;
}

header {
  text-align: left;
  /* margin-left: 50px;
  margin-bottom: 50px; */
  line-height: 15px;
}

p {
  color: #959595;
}

ul {
  list-style: none;
  font-size: 125%;
}

li {
  float: left;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.hrLine {
  width: 95%;
  margin-left: 45px;
  size: 5;
}
</style>
