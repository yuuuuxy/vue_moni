<template>
  <div class="hello">
    <div class="top-area">
      <div class="flex container">
        <nav-bar>here is father nav and it will never be show at sreen</nav-bar>
        <div class="top-right">
          <ul>
            <li>
              <input type="text" id='searbox' placeholder="Search GitHub">
            </li>
            <li>sign in </li>
            <li class="border"><a href="">sign up</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="middle-area flexcenter">
      <div class="login-left">
        <div>Built for developers</div>
        <p>GitHub is a development platform inspired by the way you work. From <a>open</a> source to <a>business</a>, you can host and review code, manage projects, and build software alongside 50 million developers.</p>
      </div>
      <div class="login">
        <span> username</span>
        <input type="text" :name="uname" v-model="uname"><br>
        <span> Email</span>
        <input type="email" :name="email" v-model="email"><br>
        <span> passwrod</span>
        <input type="password" :name="pwd" v-model="pwd"><br>
        <p class="trans1">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</p>
        <button @click='doLogin'>Sing up for GitHub</button>
        <p class="trans1">By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.</p>
      </div>
    </div>
    <div>
      <object data="simple-codelines.svg" width="300" height="100" type="image/svg+xml" codebase="https://github.githubassets.com/images/modules/site/heroes/" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '../components/Nav'
export default {
  name: 'HelloWorld',
  components: { NavBar },
  data: function() {
    return { uname: '', pwd: '', email: '' }
  },
  methods: {
    doLogin: function() {
      console.log(this.uname, '---', this.pwd)
      axios
        .post(
          '/apidoLogin',
          {
            // 还可以直接把参数拼接在url后边
            params: {
              title: '眼镜'
            }
          },
          {
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        )
        .then(function(res) {
          // this.goodsList = res.data
          console.log(res)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    doRegist: function() {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1012px) {
  .top-area {
    width: 100%;
    background-color: #24292e;
    color: whitesmoke;
    font-size: 0.8em;
  }
  .top-area .container {
    width: 70%;
    justify-content: space-between;
  }

  .login {
    box-sizing: border-box;
    height: 403px;
    width: 343px;
    background-color: white;
    border: 1px solid white;
    border-radius: 3px;
    padding: 10px 20px;
  }
  .login input {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    border-radius: 4px;
    border: 1px solid lightgrey;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
    padding: 5px;
  }
  .login input:focus {
    border: 1px solid lightblue;
    box-shadow: 0 0 5px darkslateblue;
  }
  .login span {
    display: block;
    font-size: 0.5em;
    font-weight: bolder;
    color: darkslategrey;
    width: 100%;
    padding: 12px 0 8px 0;
  }
  .login-left {
    width: 380px;
    box-sizing: border-box;
    margin-right: 64px;
  }
  .login .trans1 {
    margin-bottom: 24px;
    margin-top: 5px;
    font-size: 9px;
    color: #6a737d;
  }
  .login button {
    height: 54px;
    width: 100%;
    color: white;
    background-color: teal;
    border: none;
    border-radius: 3px;
  }
  .login button:hover {
    cursor: pointer;
    background-color: #28a745;
  }
  .login-left div {
    font-size: 3em;
    font-weight: 500;
    color: white;
  }
  .login-left p {
    color: hsla(0, 0%, 100%, 0.6);
  }
}
.middle-area {
  height: 506px;
  background-color: #2b3137;
  justify-content: center;
}
.login-left a {
  color: white;
  cursor: pointer;
  border-bottom: 0.1px solid hsla(0, 0%, 100%, 0.9);
}
.login-left a:hover {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.6);
}
.flex {
  display: flex;
  align-items: baseline;
  margin: 0 auto;
}
.flexcenter {
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.hello {
  width: 100%;
}
.hand {
  cursor: pointer;
}
input {
  outline: none;
  border: none;
}
#searbox {
  width: 150px;
  border-radius: 2px;
  font-size: 0.8em;
  background-color: #3f4448;
  color: #3f4448;
  padding: 0.8em;
}
#searbox:focus {
  background-color: white;
}
.border {
  border: 1px solid white;
  border-radius: 3px;
  padding: 0.2em 0.6em;
}
.border a {
  text-decoration: none;
  color: inherit;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  cursor: pointer;
  margin-right: 16px;
}
li:hover {
  color: hsla(0, 0%, 100%, 0.75);
}
</style>
