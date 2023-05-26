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
        <select v-model="division" v-bind:style="style1">
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
            <th>
              <label
                ><input type="checkbox" value="1" v-model="checked"
              /></label>
            </th>
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
            <td>
              <label
                ><input type="checkbox" value="2" v-model="checked"
              /></label>
            </td>
            <td>{{ detailss.serviceNm }}</td>
            <td>{{ detailss.targetCd }}</td>
            <td>{{ detailss.createDate }}</td>
            <td>{{ detailss.billYmd }}</td>
            <td>{{ detailss.startDate }}</td>
            <td>{{ detailss.endDate }}</td>
            <td>{{ detailss.name }}</td>
            <td>{{ detailss.email }}</td>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#emailModal"
              v-bind:style="btnStyle3"
            >
              <td>{{ detailss.mailTitle }}</td>
            </button>
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
    <div :key="total" v-for="total in total">
      <p class="mainTotal">
        총 합계 금액 : {{ Number(total.total).toLocaleString() }}원
      </p>
    </div>

    <!-- 이메일 Modal -->
    <div
      class="modal fade"
      id="emailModal"
      tabindex="-1"
      aria-labelledby="emailModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <img src="@/assets/banner.png" />
          <div class="modal-header">
            <h5 class="modal-title" id="emailModalLabel">
              <span style="color: red">AGILE</span> {{ invmail.mailTitle }}
            </h5>
            <button
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="background: none; border: none; float: right"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <div class="invmail">
              <p>Invoice Number : {{ invmail.docNo }}</p>
              <p>Invoice Date : {{ invmail.createDate }}</p>
              <p>
                Invoice Due : From {{ invmail.startDate }} to
                {{ invmail.endDate }}
              </p>
              <div class="invcominfo">
                <p>
                  <span>{{ invmail.targetCd }}</span>
                </p>
                <p>{{ invmail.address }}</p>
                <p>{{ invmail.email }}</p>
              </div>
              <h4>
                청구금액 : ￦
                {{ Number(invmail.totalAmt).toLocaleString() }}(VAT포함)
              </h4>
            </div>
            <table class="table-primary">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Price</th>
                  <th scope="col">VAT</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="service" v-for="service in service">
                  <td>{{ service.serviceGb }}</td>
                  <td>{{ service.cnt }}</td>
                  <td>{{ Number(service.unitAmt).toLocaleString() }}원</td>
                  <td>{{ Number(service.amt).toLocaleString() }}원</td>
                  <td>{{ Number(service.vat).toLocaleString() }}원</td>
                  <td>{{ Number(service.totalAmt).toLocaleString() }}원</td>
                </tr>
              </tbody>
              <span style="float: left; color: #959595; margin-top: 20px"
                >* 월 사용료가 30만원 미만일 경우 최소 30만원 적용</span
              >
            </table>
          </div>
          <div class="modal-header"></div>

          <div class="agileinfo">
            <div class="agilebank">
              <p>
                <span style="color: #2c3e50"
                  >입금 계좌 정보(Make All check payable to)</span
                >
              </p>
              <p>은행(Bank) <span style="margin-left: 140px">하나은행</span></p>
              <p>
                계좌번호(Bank Account)
                <span style="margin-left: 43px">341-910010-69104</span>
              </p>
              <p>
                소유자(Holder Name)
                <span style="margin-left: 60px">주식회사 애자일</span>
              </p>
              <p>
                입금기한(By Due)
                <span style="margin-left: 95px">{{ invmail.depositDate }}</span>
              </p>
              <p><span>궁금한 사항이 있으면 언제든지 문의해 주세요.</span></p>
            </div>

            <div class="coLtd">
              <p>Agile Co.Ltd</p>
              <p>경기도 성남시 수정구 적푸리로35번길 4-3, 101</p>
            </div>

            <img src="@/assets/HRlogo.png" class="logoimg" />

            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 품목 Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
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
                <tr :key="service" v-for="service in service">
                  <td>{{ service.serviceGb }}</td>
                  <td>{{ service.cnt }}</td>
                  <td>{{ Number(service.unitAmt).toLocaleString() }}원</td>
                  <td>{{ Number(service.amt).toLocaleString() }}원</td>
                  <td>{{ Number(service.vat).toLocaleString() }}원</td>
                  <td>{{ Number(service.totalAmt).toLocaleString() }}원</td>
                </tr>
                <br />
                <tr
                  :key="charge"
                  v-for="charge in charge"
                  style="font-weight: bold; font-size: 17px"
                >
                  <td>합계</td>
                  <td></td>
                  <td></td>
                  <td>{{ Number(charge.sumAmt).toLocaleString() }}원</td>
                  <td>{{ Number(charge.sumBat).toLocaleString() }}원</td>
                  <td>{{ Number(charge.sumTotal).toLocaleString() }}원</td>
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
  // filters: {
  //   comma(val) {
  //     return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  //   }
  // },
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
      btnStyle3: {
        background: 'none',
        border: 'none'
      },
      //   date: ''
      picked: new Date(),
      Caldate: null,
      company: '1',
      division: '1',
      checked: [],
      detailss: '',
      service: '',
      charge: '',
      total: '',
      invmail: ''
    }
  },
  mounted() {
    this.getdetailss()
    this.getservice()
    this.getcharge()
    this.gettotal()
    this.getinvmail()
  },
  methods: {
    getdetailss() {
      axios
        .get('http://192.168.0.62:8080/MgrInvoice.do?cmd=getInvoiceInfo')
        .then((result) => {
          // console.log(result.data)
          this.detailss = result.data.DATA
        })
    },
    getservice() {
      axios
        .get(
          'http://192.168.0.62:8080/MgrInvoice.do?cmd=getInvoiceInfoDetail&invNo=1&docNo=202304030001'
        )
        .then((result2) => {
          console.log('result2 :: ')
          console.log(result2.data)
          this.service = result2.data.DATA
        })
    },
    getcharge() {
      axios
        .get(
          'http://192.168.0.62:8080/MgrInvoice.do?cmd=getTotalDetail&invNo=9&docNo=202304010009'
        )
        .then((result3) => {
          // console.log(result3.data)
          this.charge = result3.data.DATA
        })
    },
    gettotal() {
      axios
        .get('http://192.168.0.62:8080/MgrInvoice.do?cmd=getTotal&std=202304')
        .then((result4) => {
          // console.log(result4.data)
          this.total = result4.data.DATA
        })
    },
    getinvmail() {
      axios
        .get(
          'http://192.168.0.62:8080/MgrInvoice.do?cmd=getTotalDetailPopup&invNo=9&docNo=202304010009'
        )
        .then((result5) => {
          console.log('result5 :: ')
          console.log(result5.data.DATA)
          console.log(result5.data.DATA.address)
          this.invmail = result5.data.DATA
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

/* .hrLine {
  width: 95%;
  margin-left: 45px;
  size: 5;
} */

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
  padding: 70px 35px 18px 35px;
  font-size: 14px;
  border-bottom: 1px solid #2222;
}
td {
  padding: 10px;
}
.mainTotal {
  float: right;
  margin: 20px 40px 20px 0;
  color: #0d6efd;
  font-size: 18px;
}

.logoimg {
  width: 15%;
  margin: 0 auto;
  /* margin-top: 20px; */
}

.coLtd {
  font-size: 13px;
  margin-top: 150px;
}

.coLtd p {
  line-height: 2px;
  font-weight: lighter;
}
.agileinfo {
  line-height: 18px;
  margin-top: 50px;
  margin-left: 100px;
  font-weight: 400;
}
.agilebank p {
  text-align: left;
}

.invmail p {
  text-align: left;
  margin-top: 20px;
  margin-left: 100px;
  line-height: 3px;
}

.invcominfo {
  line-height: 3px;
  padding-top: 80px;
  padding-bottom: 50px;
}
</style>
