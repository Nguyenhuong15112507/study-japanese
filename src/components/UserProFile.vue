<template>
  <div class="container">
    <div class="header-user">
      <h1>User Information</h1>
    </div>
    <div class="form-input general-info">
      <div class="img-container">
        <img class="login-infor-img" src="../img/Hinh-Anh-Anime-Chibi-Girl (3).jpg" style="width:100%;" alt="">
      </div>
      <div class="form-container">
        <div class="form-group">
          <i class="fa fa-user"></i>
          <label for="fullname">Họ và tên:</label>
          <span class="input-wrap" style="margin-left: 29px;">
            <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên" :disabled="!isEdit">
          </span>
        </div>
        <div class="form-group">
          <i class="fa fa-envelope"></i>
          <label for="email">Email:</label>
          <span class="input-wrap" style="margin-left: 63px;">
            <input type="email" id="email" name="email" placeholder="Nhập email" :disabled="!isEdit">
          </span>
        </div>
        <div class="form-group">
          <i class="fa fa-phone"></i>
          <label for="phone">Số điện thoại:</label>
          <span class="input-wrap">
            <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" :disabled="!isEdit">
          </span>
        </div>
        <div class="form-group">
          <i class="fa fa-map-marker-alt"></i>
          <label for="address">Địa chỉ:</label>
          <span class="input-wrap" style="margin-left: 58px;">
            <input type="text" id="address" name="address" placeholder="Nhập địa chỉ" :disabled="!isEdit">
          </span>
        </div>
        <div class="form-group">
          <i class="fa fa-briefcase"></i>
          <span class="input-label"><label for="authority">Authority</label></span>
          <span class="input-wrap" style="margin-left: 34px;">
            <select type="text" class="login-input selector" id="authority" :disabled="!isEdit">
              <option id="option-teacher" value="teacher">Teacher</option>
              <option id="option-student" value="student">Student</option>
            </select>
          </span>
        </div>

      </div>
    </div>
    <div class="detail-information form-input">
      <div class="study-resume">
        <h3 class="study-resume-title">Study result</h3>
        <div class="skill-wraper">
          <div class="skill-name">Grammar</div>
          <div class="container-result">
            <div class="japanese-skill grammar">80%</div>
          </div>
        </div>
        <div class="skill-wraper">
          <div class="skill-name">Kanji</div>
          <div class="container-result">
            <div class="japanese-skill kanji">60%</div>
          </div>
        </div>
        <div class="skill-wraper">
          <div class="skill-name">Conversation</div>
          <div class="container-result">
            <div class="japanese-skill conversation">50%</div>
          </div>
        </div>
        <div class="skill-wraper">
          <div class="skill-name">Listen</div>
          <div class="container-result">
            <div class="japanese-skill listen">70%</div>
          </div>
        </div>

        <h3 class="study-resume-title">Your account</h3>
        <div class="account-info form-group">
          <label for="address">ID</label>
          <div :class="['input-wrap', { 'validateInput': hasErr.includes('userNameIsEmpty') }]"
            style="margin-left: 104px; width: 88%;">
            <input type="text" id="identify" name="identify" required placeholder="ID" :disabled="!isEdit"
              v-model="userName" @input="handleOnchangeUserN()">
        </div>
        </div>
        <div class="erroMesSentence" v-if="hasErr.includes('userNameIsEmpty')">Please enter your username</div>
        <div class="erroMesSentence" v-if="hasErr.includes('userNameLength')">Your username exceed 10</div>
        <div class="account-info form-group">
          <label for="address">Password</label>
          <div :class="['input-wrap', { 'validateInput': hasErr.includes('passWIsEmpty') }]" style="margin-left: 45px; width: 88%;">
            <input type="text" id="password" name="password" required placeholder="Password" :disabled="!isEdit"
              v-model="passW" @input="handleOnchangePassW()">
          </div>
        </div>
        <div class="erroMesSentence" v-if="hasErr.includes('passWIsEmpty')">Please enter your password</div>
        <div class="erroMesSentence" v-if="hasErr.includes('passWLength')">Your password exceed 10</div>
        <div class="btn-wrap">
          <button type="button" @click="handlechangenamebtn()" class="btn save-btn">{{ !isEdit ? 'Edit' : 'Save' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isEdit = ref(false)
const userName = ref('')
const passW = ref('')
const hasErr = ref([])




const handlechangenamebtn = () => {
  isEdit.value = !isEdit.value
  if (isEdit) {
    hasErr.value = []
    if (userName.value === "") {
        hasErr.value.push('userNameIsEmpty')
    }
    if (userName.value.length > 100) {
        hasErr.value.push('userNameLength')
    }
    if (passW.value === "") {
        hasErr.value.push('passWIsEmpty')
    }

    if (passW.value.length > 100) {
        hasErr.value.push('passWLength')
    }

  }
}
const handleOnchangeUserN = (value) => {
    const isIncludesUserN = hasErr.value.includes('userNameIsEmpty')
    if (userName.value === "" && isIncludesUserN) {
        return
    }
    if (userName.value === "" && !isIncludesUserN) {
        hasErr.value.push('userNameIsEmpty')
        return
    }

    hasErr.value = hasErr.value.filter(item => item !== 'userNameIsEmpty')//Loc ra nhung phan tu khac userName de gan lai cho hasErr

    const isIncludesUserLength = hasErr.value.includes('userNameLength')
    if (userName.value.length > 100 && isIncludesUserLength) {
        return
    }
    if (userName.value.length > 100 && !isIncludesUserLength) {
        hasErr.value.push('userNameLength')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'userNameLength')
}

const handleOnchangePassW = (value) => {
    const isIncludesPass = hasErr.value.includes('passWIsEmpty')
    if (passW.value === "" && isIncludesPass) {
        return
    }
    if (passW.value === "" && isIncludesPass == false) {
        hasErr.value.push('passWIsEmpty')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'passWIsEmpty')

    const isIncludesPassLength = hasErr.value.includes('passWLength')
    if (passW.value.length > 100 && isIncludesPassLength) {
        return
    }
    if (passW.value.length > 100 && !isIncludesPassLength) {
        hasErr.value.push('passWLength')
        return
    }
    hasErr.value = hasErr.value.filter(item => item !== 'passWLength')
}



</script>




<style scoped>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  font-family: sans-serif;
  font-size: 16px;
  color: #333;

}

/* Container */
.container {
  max-width: 100%;
  width: 100%;
  height: 1000px;
  margin: 0 10px auto;
  background-color: rgb(242, 240, 240);
  position: absolute;
  top: 156px;
  left: 0;
  right: 0;
  display: block;
}

.form-input {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;

}

.img-container {
  width: 20%;
  margin-right: 10px;
  margin-left: 10px;
  margin: auto 10px;
}

.form-container {
  width: 38em;
  padding-top: 10px;
}

/* Header */
.header-user {
  background-color: rgb(197 237 255);
  ;
  padding: 20px;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.header-user h1 {
  font-size: 24px;
  margin-top: 0;
}

.header-user p {
  font-size: 16px;
  margin-bottom: 0;
}

.header-user,
.form-input {
  width: 50%;
  border: thick double rgb(197 237 255);
  margin: 0 auto;
}

.general-info {
  border-bottom: none;
}

.detail-information {
  border-top: 1px solid rgb(197 237 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

/* Main content */
.main-content {
  padding: 20px;
}

/* Form group */
.form-group {
  margin-bottom: 15px;
}

/* Label */
.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
}

/* Input */
.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}

/* Textarea */
.form-control[type="textarea"] {
  height: 100px;
}

.fa {
  margin-left: 10px;
  margin-right: 10px;
}

.login-infor-img {
  background-color: #fff;
}

#password,
#identify,
#fullname,
#email,
#phone,
#address,
#authority {
  margin-left: 10px;
  background-color: rgba(184, 227, 245, 0.3);
  border-radius: 5px;
  border: none;
  height: 30px;
  padding-left: 10px;
  outline: none;
  width: 50%;

}

/* .detail-information {
  height: 380px;
} */

.container-result {
  background-color: rgb(192, 192, 192);
  width: 60%;
  height: 25px;
  border-radius: 15px;
}



.japanese-skill {
  background-color: rgb(197 237 255);
  color: rgb(59, 55, 55);
  padding: 1%;
  text-align: right;
  font-size: 13px;
  border-radius: 15px;
  height: 25px;
}

.grammar {
  width: 80%;
}

.kanji {
  width: 60%;
}

.conversation {
  width: 50%;
}

.listen {
  width: 70%;
}

.study-resume {
  width: 100%;
  margin-left: 10px;
}

.skill-wraper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 10px;
  margin-left: 20px;
}

.account-info {
  margin-left: 15px;
  font-size: 14px;
  display: flex;
 align-items: center;
 width: 60%;
 margin-bottom: 10px;
}

.save-btn {
  border: 1px solid rgb(49, 171, 224, 0.6);
  background-color: rgb(49, 171, 224, 0.6);
  border-radius: 5px;
  -webkit-box-shadow: 0 0 5px 0 rgba(171, 213, 231, 0.6);
  padding: 5px 20px;
}

.btn-wrap {
  display: flex;
  justify-content: center;
}
.validateInput {
    color: red;
    border: 1px solid red;
    margin-left: 10px;
  border-radius: 5px;

}

.input-wrap {

}
.erroMesSentence {
    margin-left: 131px;
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
}

.ishide {
    display: none;
}
#password,
#identify {
  width: 100%;
  margin-left: 0;
}
</style>