<template>
  <div class="box">
    <div class="top">
      <div class="topicon">
        <i class="fa fa-angle-up"></i>
      </div>
      <div class="topbtn">
        <button>Connect with facebook copy</button>
      </div>
    </div>
    <div class="login">
      <div class="title">
        <span>SIGN IN</span>
      </div>
      <form>
        <div class="email">
          <label for="Email">Email</label>
          <input type="email" v-model="email" v-on:keyup="isValue('email')" placeholder="Please enter the user name">
          <i class="fa fa-times-circle" v-if="isEmail" v-on:click="empty('email')"></i>
        </div>
        <div class="paswd">
          <label for="Password">Password</label>
          <input type="password" v-model="password" v-on:keyup="isValue('password')" placeholder="Please enter password">
          <i class="fa fa-times-circle" v-if="ispassd" v-on:click="empty('password')"></i>
        </div>
        <p class="msg">Forgot your password?</p>
      </form>
      <button class="sub" v-on:click="login" v-on:keyup.enter="login">Sign In</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        isEmail: true,
        ispassd: true,
        email: 'freeslab88@gmail.com',
        password: 'admin0'
      }
    },
    methods: {
      isValue(type) {
        if(type == 'email') {
          if(this.email.length == 0) {
            this.isEmail = false;
            return
          }else {
            this.isEmail = true;
            return
          }
        }
        if(type == 'password') {
          if(this.password.length == 0) {
            this.ispassd = false;
            return
          }else {
            this.ispassd = true;
            return
          }
        }

      },
      empty(type) {
        if(type == 'email') {
          this.email = '';
          this.isEmail = false;
          return
        }
        if(type == 'password') {
          this.password = '';
          this.ispassd = false;
          return
        }
      },
      login() {
        let RegExps = {
          //电子邮件
          Email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/i
        };
        let mail = this.email;
        let pasd = this.password.length;
        let flag = RegExps.Email.test(mail);
        if (!flag) {
          alert('Please fill in the user name correctly');
          return
        }
        if (!(6 < pasd < 12)) {
          alert('The password you entered is incorrect');
          return
        }
        this.$router.push({path: '/favorites'});
      }
    }
  }
</script>

<style scoped>
  button {
    border: none;
    width: 100%;
    line-height: 4rem;
    color: #fff;
  }

  input {
    width: 90%;
    border: none;
    border-bottom: 1px solid #ebebeb;
    outline: none;
    padding: 0.5rem 0.5rem 1rem;
    color: #363636;
    font-size: 1.2rem;
    font-weight: 600;
  }

  label {
    display: block;
    color: #6f6f6f;
  }

  .top {
    border-bottom: 1px solid #ebebeb;
  }

  .topicon {
    text-align: center;
    font-size: 1.4rem;
    color: #aeaeae;
    line-height: 2.4rem;
  }

  .topbtn {
    padding: 1rem 1.5rem 2rem;
  }

  .topbtn > button {
    line-height: 4rem;
    text-transform: uppercase;
    border-radius: 3rem;
    text-align: center;
    background: linear-gradient(90deg, rgba(106, 64, 159, 1) 0, rgba(144, 30, 177, 1) 100%);
  }

  .title {
    text-align: center;
    color: #363636;
    padding: 2rem;
  }

  .title > span {
    display: inline-block;
    line-height: 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-bottom: 2px solid #363636;
  }

  form {
    padding: 1rem;
    overflow: hidden;
  }

  .email {
    margin-bottom: 1rem;
    position: relative;
  }

  .email > i {
    color: #b8b8b8;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .paswd {
    margin-bottom: 2rem;
    position: relative;
  }

  .paswd > i {
    color: #b8b8b8;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .msg {
    color: #a1a1a1;
    line-height: 3rem;
    text-align: center;
  }

  .sub {
    font-size: 1.4rem;
    text-align: center;
    text-transform: uppercase;
    background-color: #fd4c9d;
  }
</style>
