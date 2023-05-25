<template>
  <contariner>
    <header class="p-5">
      <h1>청구서 발행</h1>
      <p>고객의 청구서를 생성하고 이메일로 보내는 작업을 합니다.</p>
    </header>

    <!-- <div class="nav-item px-5 fs-5"> -->
    <!-- <router-link to="#">
        <li v-for="nav in menuName" :key="nav">
          <button @click="styleChange = false">
          {{ nav }}
          </button>
        </li>
      </router-link> -->

    <!-- <li class="nav-item p-2">
        <button @click="style1.color = 'blue'">클라우드 서비스</button>
      </li>

      <li class="nav-item p-2">급여대행 서비스</li>
      <li class="nav-item p-2">유지보수</li>
    </div> -->

    <!-- <hr class="hrLine" /> -->

    <ul class="nav nav-tabs px-5" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          클라우드 서비스
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          급여대행 서비스
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          유지보수
        </button>
      </li>
    </ul>
    <!-- <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      ></div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      ></div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      ></div>
    </div> -->

    <!-- <datepicker v-model="picked" placeholder="발행년월"> </datepicker> -->

    <!-- <VueDatePicker v-model="date" placeholder="Select Date">{{
    date
  }}</VueDatePicker> -->
    <div class="selectOpt">
      <li>
        <datepicker
          placeholder="발행년월"
          v-model="Caldate"
          v-bind:style="style1"
        ></datepicker>
      </li>
      <li>
        <select v-model="company" v-bind:style="style1">
          <option value="1">고객사</option>
          <option value="100005">블랭크코퍼레이션</option>
          <option value="100014">보그워너오창</option>
          <option value="100250">하크코리아(유)</option>
          <option value="100294">케어링코리아(주)</option>
          <option value="100350">(주)피엘에스</option>
        </select>
      </li>
      <li>
        <select v-model="service" v-bind:style="style1">
          <option value="1">서비스구분</option>
          <option value="100005">클라우드 서비스</option>
          <option value="100014">급여대행 서비스</option>
          <option value="100250">유지보수</option>
        </select>
      </li>
      <li>
        <button v-bind:style="btnStyle">청구서 발행</button>
      </li>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>서비스 구분</th>
            <th>고객사</th>
            <th>생성일</th>
            <th>발행일</th>
            <th>서비스 시작</th>
            <th>서비스 마감</th>
            <th>담당자</th>
            <th>이메일</th>
            <th>청구서 제목</th>
            <th>재직인원</th>
            <th>휴직인원</th>
            <th>품목</th>
          </tr>
        </thead>

        <tbody>
          <tr :key="detailss" v-for="detailss in detailss">
            <td>{{ detailss.serviceNm }}</td>
            <td>{{ detailss.targetCd }}</td>
            <td>{{ detailss.createDate }}</td>
            <td>{{ detailss.billYmd }}</td>
            <td>{{ detailss.startDate }}</td>
            <td>{{ detailss.endDate }}</td>
            <td>{{ detailss.name }}</td>
            <td>{{ detailss.email }}</td>
            <td>{{ detailss.mailTitle }}</td>
            <td>{{ detailss.wk }}</td>
            <td>{{ detailss.lv }}</td>
            <td>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                v-bind:style="btnStyle2"
              >
                확인
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">서비스 품목 내용</h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="background: none; border: none"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <table>
              <thead>
                <tr>
                  <th>품목</th>
                  <th>인원</th>
                  <th>단가</th>
                  <th>금액</th>
                  <th>부가세</th>
                  <th>청구금액</th>
                </tr>
              </thead>

              <tbody>
                <tr :key="detailss" v-for="detailss in detailss">
                  <td>{{ detailss.startDate }}</td>
                  <td>{{ detailss.endDate }}</td>
                  <td>{{ detailss.name }}</td>
                  <td>{{ detailss.email }}</td>
                  <td>{{ detailss.mailTitle }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </contariner>
</template>

<script>
import axios from 'axios'
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue' // eslint-disable-line no-unused-vars

// import VueDatePicker from '@vuepic/vue-datepicker'
// import '@vuepic/vue-datepicker/dist/main.css'

const picked = ref(new Date()) // eslint-disable-line no-unused-vars

export default {
  name: 'App',
  components: {
    Datepicker
    // VueDatePicker
  },

  data() {
    return {
      //   menuName: ['클라우드 서비스', '급여대행 서비스', '유지보수']
      //   styleChange: true
      style1: {
        border: 'solid 1px #CED4DA',
        borderRadius: '4px',
        width: '280px',
        fontSize: '15px',
        fontWeight: '400',
        padding: '5px',
        color: 'gray'
      },
      btnStyle: {
        background: '#201CEC',
        borderRadius: '4px',
        color: 'white',
        padding: '5px',
        border: 'none'
      },
      btnStyle2: {
        fontSize: '12px'
      },
      //   date: ''
      picked: new Date(),
      Caldate: null,
      company: '1',
      service: '1',
      checked: [],
      detailss: ''
    }
  },
  mounted() {
    this.getdetailss()
  },
  methods: {
    getdetailss() {
      axios
        .get('http://192.168.0.62:8080/MgrInvoice.do?cmd=getInvoiceInfo')
        .then((result) => {
          console.log(result.data)
          this.detailss = result.data.DATA
        })
    }
  }
}
</script>

<style scoped>
* {
  color: #2c3e50;
  position: relative;
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

li {
  float: left;
  display: inline-flex;
  list-style: none;
  margin-right: 50px;
}

.hrLine {
  width: 95%;
  margin-left: 45px;
  size: 5;
}

li:hover {
  cursor: pointer;
}

/* li:active {
  color: red;
  border-bottom: 1px solid red;
}

li:focus {
  color: red;
}

li:checked {
  color: red;
} */

button {
  border: 1px solid #2222;
  border-radius: 4px;
  background: #2222;
}

.selectOpt {
  display: flex;
  margin-left: 50px;
  margin-top: 50px;
}

/* select {
  margin-right: 50px;
} */

table {
  display: inline-block;
}

th {
  padding: 65px 65px 20px 65px;
  font-size: 15px;
  border-bottom: 1px solid #2222;
}
td {
  padding: 10px;
}
</style>
