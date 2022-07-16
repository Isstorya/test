<template>
<<<<<<< HEAD
	<div class="container">
		<AuthHeader :title="headerTitle" />
		<SignUpComponent
			v-if="!loginMode"
			@changeMode="changeMode"
			@sendForm="sendForm"
		/>
		<LoginComponent v-else />
	</div>
=======
  <div class="container">
    <AuthHeader :title="headerTitle" />
    <div class="authSuccess" v-if="$store.state.email">
      Success
    </div>
    <div class="auth" v-else>
      <SignUpComponent v-if="!loginMode" @changeMode="changeMode" @sendForm="sendForm"/>
      <LoginComponent v-else @changeMode="changeMode" @sendLoginForm="sendLoginForm"/>
    </div>
  </div>
>>>>>>> 1f6515c2e475a34c37c5776f1f3cb2f53b91f8b3
</template>

<script>
import AuthHeader from "../components/AuthHeader.vue";
import SignUpComponent from "../components/auth/SignUpComponent.vue";
import LoginComponent from "../components/auth/LoginComponent.vue";

export default {
<<<<<<< HEAD
	data: () => ({
		headerTitle: "SignUp",
		loginMode: false,
		changeModeBtnTitle: "Login",
	}),
	components: {
		AuthHeader,
		SignUpComponent,
		LoginComponent,
	},
	methods: {
		changeMode() {
			if (!this.loginMode) {
				this.headerTitle = "Login";
				this.loginMode = true;
			} else {
				this.headerTitle = "SignUp";
				this.loginMode = false;
			}
		},
		async sendForm(value) {
			await this.$axios
				.$post("/api/auth/signup", value)
				.then((req, res) => {
					this.$store.dispatch("setEmail", res.email);
				})
				.catch((req, res) => {
					console.log(res);
					this.$store.dispatch("setEmail", value.email);
				});
			console.log(this.$store.state.email);
		},
	},
};
=======
  data: () => ({
    headerTitle: "SignUp",
    loginMode: false,
    changeModeBtnTitle: "Login"
  }),
  components: {
    AuthHeader,
    SignUpComponent,
    LoginComponent
  },
  methods: {
    changeMode() {
      if (!this.loginMode) {
        this.headerTitle = "Login"
        this.loginMode = true
      } else {
        this.headerTitle = "SignUp"
        this.loginMode = false
      }
    },
    async sendForm(value) {
      await this.$axios.$post("/api/auth/signup",value)
      .then((req,res) => {
        this.$store.dispatch("setEmail", res.email)
      })
      .catch((req,res) => {
        console.log(res)
        this.$store.dispatch("setEmail", value.email)
      })
      console.log(this.$store.state.email)
    },
    async sendLoginForm(value) {
      await this.$axios.$post("/api/auth/login",value)
      .then((req,res) => {
        this.$store.dispatch("setEmail", res.email)
      })
      .catch((req,res) => {
        console.log(res)
        this.$store.dispatch("setEmail", value.email)
      })
      console.log(this.$store.state.email)
    }
  }
}
>>>>>>> 1f6515c2e475a34c37c5776f1f3cb2f53b91f8b3
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
.container {
	max-width: 665px;
	min-width: 320px;
	height: 480px;
}
</style>
