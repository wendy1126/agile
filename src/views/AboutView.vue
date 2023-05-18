<template>
  <div class="about">
    <div>
      <button class="btn1" @click="getdata">agile Data 조회하기</button>
    </div>

    <div>
      <button @click="lowinvNO">invNO 낮은 순 정렬</button>
      <button @click="highinvNO">invNO 높은 순 정렬</button>
    </div>
    <div>
      <input
        v-model="s_sysarea"
        type="text"
        placeholder="sysareaid을 입력해주세요."
      />
      <input
        type="text"
        v-model="s_invNo"
        placeholder="invNo을 입력해주세요."
      />
      <input
        type="text"
        v-model="s_docNo"
        placeholder="docNo을 입력해주세요."
      />
      <button @click="insertdata">입력</button>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>sysareaId</th>
            <th>invNo</th>
            <th>docNo</th>
            <th>empId</th>
            <th>상세보기</th>
            <th>버튼</th>
          </tr>
        </thead>

        <tbody>
          <tr :key="i" v-for="(item, i) in items">
            <td>{{ i }}</td>
            <td><input v-model="item.sysareaId" /></td>
            <td><input v-model="item.invNo" /></td>
            <td><input v-model="item.docNo" /></td>
            <td><input v-model="item.empId" /></td>
            <td>
              <button class="btn2" @click="$router.push('/detail')">
                go to detail
              </button>
            </td>
            <td>
              <button @click="updatedata(item)">수정</button>
              <button @click="deletedata(item)">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      items: '',
      sysareaId: '',
      invNo: '',
      docNo: '',
      empId: '',
      s_sysarea: '',
      s_invNo: '',
      s_docNo: ''
    }
  },
  created() {
    this.getdata()
  },
  methods: {
    getdata() {
      axios.get('http://192.168.0.62:8080/getList.do').then((결과1) => {
        console.log(결과1.data)
        this.items = 결과1.data.DATA
      })
    },
    insertdata() {
      axios
        .get('http://192.168.0.62:8080/insertTest.do', {
          params: {
            sysareaId: this.s_sysarea,
            invNo: this.s_invNo,
            docNo: this.s_docNo
          }
        })
        .then((결과2) => {
          console.log(결과2)
          alert('입력완료')
          // this.getdata()
        })
    },
    updatedata(item) {
      axios
        .get('http://192.168.0.62:8080/updateTest.do', {
          params: {
            sysareaId: item.sysareaId,
            invNo: item.invNo,
            docNo: item.docNo,
            empId: item.empId
          }
        })
        .then((결과3) => {
          console.log(결과3)
          alert('수정완료')
          // this.getdata()
        })
    },
    deletedata(item) {
      axios
        .get('http://192.168.0.62:8080/deleteTest.do', {
          params: {
            sysareaId: item.sysareaId,
            invNo: item.invNo,
            docNo: item.docNo
          }
        })
        .then((결과3) => {
          console.log(결과3)
          alert('삭제완료')
          // this.getdata()
        })
    },
    lowinvNO() {
      this.items.sort(function (a, b) {
        return a.invNo - b.invNo
      })
    },
    highinvNO() {
      this.items.sort(function (a, b) {
        return b.invNo - a.invNo
      })
    }
  }
}
</script>

<style scoped>
.btn1 {
  margin: 15px;
  background-color: blue;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-weight: bolder;
}
.btn2 {
  margin: 15px;
  background-color: green;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-weight: bolder;
}
button {
  margin: 15px;
  background-color: red;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-weight: bolder;
}
table {
  margin: 0 auto;
  width: 60%;
}
th {
  border: 1px solid black;
}
td {
  border: 1px solid black;
}
</style>
