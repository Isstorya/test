<template>
	<div class="container">
		<AuthHeader :title="headerTitle" />
		<SignUpComponent
			v-if="!loginMode"
			@changeMode="changeMode"
			@sendForm="sendForm"
		/>
		<LoginComponent v-else />
	</div>
</template>

<script>
import AuthHeader from "../components/AuthHeader.vue";
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
