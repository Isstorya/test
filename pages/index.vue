<template>
	<div class="container">
		<auth-header :title="headerTitle" />
		<auth-success-component v-if="$store.state.email" />
		<div class="auth" v-else>
			<sign-up-component
				v-if="!loginMode"
				@changeMode="changeMode"
				@sendForm="sendForm"
			/>
			<login-component
				v-else
				@changeMode="changeMode"
				@sendLoginForm="sendLoginForm"
			/>
		</div>
	</div>
</template>

<script>
import AuthHeader from "../components/AuthHeader.vue";
import AuthSuccessComponent from "../components/AuthSuccessComponent.vue";
import SignUpComponent from "../components/auth/SignUpComponent.vue";
import LoginComponent from "../components/auth/LoginComponent.vue";

export default {
	data: () => ({
		headerTitle: "SignUp",
		loginMode: false,
		changeModeBtnTitle: "Login",
	}),
	components: {
		AuthHeader,
		SignUpComponent,
		LoginComponent,
		AuthSuccessComponent,
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
		async sendLoginForm(value) {
			await this.$axios
				.$post("/api/auth/login", value)
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
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&family=Work+Sans&display=swap");
* {
	margin: 0;
	padding: 0;
}
.container {
	display: flex;
	justify-content: flex-start;
	max-width: 665px;
	min-width: 320px;
	height: 480px;
	margin: 0 auto;
}
@media screen and (max-width: 642px) {
	.container {
		display: block;
	}
	header {
		width: 100%;
		height: 20%;
	}
	header p {
		margin-top: 0;
		transform: none;
	}
}
</style>
