<template>
  <!-- <div><button class="btn1" @click="detail">agile Data Detail</button></div> -->
  <!-- <div>{{ details }}</div> -->

  <div>
    <table>
      <thead>
        <tr>
          <th>sysareaId</th>
          <th>invNo</th>
          <th>docNo</th>
          <th>mailTitle</th>
          <th>mail내용</th>
          <th>email주소</th>
          <th>serviceNo</th>
          <th>service이름</th>
          <th>인원수(판매수량)</th>
          <th>인원수*가격</th>
          <th>총계</th>
          <th>vat</th>
          <th>항목totalAmt</th>
          <th>비고</th>
        </tr>
      </thead>

      <tbody>
        <tr :key="details" v-for="details in details">
          <td>{{ details.sysareaId }}</td>
          <td>{{ details.invNo }}</td>
          <td>{{ details.docNo }}</td>
          <td>{{ details.mailTitle }}</td>
          <td>{{ details.mailinfo }}</td>
          <td>{{ details.email }}</td>
          <td>{{ details.serviceNo }}</td>
          <td>{{ details.serviceGb }}</td>
          <td>{{ details.cnt }}</td>
          <td>{{ details.unitAmt }}</td>
          <td>{{ details.amt }}</td>
          <td>{{ details.vat }}</td>
          <td>{{ details.totalAmt }}</td>
          <td>{{ details.bigo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      details: ''
    }
  },
  mounted() {
    this.detail()
  },
  methods: {
    detail() {
      axios.get('http://192.168.0.62:8080/getDetail1.do').then((디테일) => {
        console.log(디테일.data)
        this.details = 디테일.data.DATA
      })
    }
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
  width: 90%;
}
th {
  border: 1px solid black;
}
td {
  border: 1px solid black;
}
</style>
